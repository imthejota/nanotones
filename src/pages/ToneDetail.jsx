import { useParams, Link } from 'react-router-dom';
import { famousTones } from '../data/famousTones';
import { useGearOverrides } from '../hooks/useGearOverrides';
import Badge from '../components/Badge/Badge';
import './ToneDetail.css';

const Knob = ({ label, value }) => {
    // Value usually 0-10, map to rotation (-135deg to +135deg)
    const rotation = -135 + (value / 10) * 270;

    return (
        <div className="knob-container">
            <div className="knob-dial">
                <div
                    className="knob-indicator"
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
            </div>
            <span className="knob-label">{label}</span>
            <span className="knob-value">{value}</span>
        </div>
    );
};

const Switch = ({ label, engaged }) => (
    <div className="switch-container">
        <div className={`switch-led ${engaged ? 'on' : 'off'}`} />
        <div className={`switch-tgl ${engaged ? 'up' : 'down'}`} />
        <span className="switch-label">{label}</span>
    </div>
);

const ToneDetail = () => {
    const { id } = useParams();
    const tone = famousTones.find(t => t.id === id);

    if (!tone) {
        return (
            <div className="page-container">
                <h2>Tone not found.</h2>
                <Link to="/tones">Back to Famous Tones</Link>
            </div>
        );
    }

    const gearData = useGearOverrides();

    // Look up actual capture and IR info
    const capture = gearData.captures.find(c => c.id === tone.settings.capture);
    const ir = gearData.irs.find(i => i.id === tone.settings.ir);

    return (
        <div className="page-container tone-detail-page">
            <div className="detail-header">
                <Link to="/tones" className="back-link">&larr; Back to Tones</Link>
                <span className="artist-tag">{tone.artist}</span>
                <h1>"{tone.song}"</h1>
                <p className="detail-desc">{tone.description}</p>
            </div>

            <div className="preset-viewer">

                {/* Hardware UI Representation */}
                <div className="hardware-panel">
                    <div className="nano-cortex-ui">

                        {/* Top Row Knobs */}
                        <div className="knobs-row">
                            <Knob label="GAIN" value={tone.settings.knobs.gain} />
                            <Knob label="BASS" value={tone.settings.knobs.bass} />
                            <Knob label="MID" value={tone.settings.knobs.mid} />
                            <Knob label="TREBLE" value={tone.settings.knobs.treble} />
                            <Knob label="AMOUNT" value={tone.settings.knobs.amount} />
                            <Knob label="LEVEL" value={tone.settings.knobs.level} />
                        </div>

                        {/* Hardware Switches & Footswitches */}
                        <div className="switches-row">
                            <Switch label="GATE" engaged={tone.settings.effects.gate} />
                            <Switch label="TRANSPOSE" engaged={tone.settings.effects.transpose !== 0} />
                            <Switch label="CHORUS" engaged={tone.settings.effects.chorus?.engaged} />
                            <Switch label="DELAY" engaged={tone.settings.effects.delay?.engaged} />
                            <Switch label="REVERB" engaged={tone.settings.effects.reverb?.engaged} />
                        </div>

                        <div className="footswitches-row">
                            <div className="fs">
                                <div className="fs-ring blue" />
                                <div className="fs-button" />
                                <span>I</span>
                            </div>
                            <div className="fs">
                                <div className="fs-ring green" />
                                <div className="fs-button" />
                                <span>II</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Selected Blocks Detail (App Representation) */}
                <div className="app-ui-panel">
                    <h2>Signal Chain Setup</h2>

                    <div className="signal-block capture-block">
                        <div className="block-header">
                            <Badge variant={capture?.type === 'Amp' ? 'amp' : 'pedal'}>Capture</Badge>
                            <h3>{capture?.name}</h3>
                        </div>
                        {capture?.imageUrl && <div className="block-image" style={{ backgroundImage: `url(${capture.imageUrl})` }}></div>}
                        <p><strong>Brand:</strong> {capture?.brand}</p>
                        <p className="block-note">{capture?.description}</p>
                    </div>

                    <div className="signal-block ir-block">
                        <div className="block-header">
                            <Badge variant="ir">IR / Cab</Badge>
                            <h3>{ir?.name}</h3>
                        </div>
                        {ir?.imageUrl && <div className="block-image" style={{ backgroundImage: `url(${ir.imageUrl})` }}></div>}
                        <p><strong>Brand:</strong> {ir?.brand}</p>
                        <p><strong>Speaker:</strong> {ir?.speaker}</p>
                    </div>

                    {/* Active Effects Detail */}
                    <div className="active-effects-list">
                        <h3>Active Effects Settings</h3>
                        {tone.settings.effects.compressor?.engaged && (
                            <div className="effect-detail">
                                <Badge variant="effect">{tone.settings.effects.compressor.name || "Compressor"}</Badge>
                                Sustain: {tone.settings.effects.compressor.sustain} | Level: {tone.settings.effects.compressor.level}
                            </div>
                        )}
                        {tone.settings.effects.overdrive?.engaged && (
                            <div className="effect-detail">
                                <Badge variant="effect">{tone.settings.effects.overdrive.name || "Drive"}</Badge>
                                Drive: {tone.settings.effects.overdrive.drive} | Tone: {tone.settings.effects.overdrive.tone} | Level: {tone.settings.effects.overdrive.level}
                            </div>
                        )}
                        {tone.settings.effects.chorus?.engaged && (
                            <div className="effect-detail">
                                <Badge variant="effect">{tone.settings.effects.chorus.name || "Chorus"}</Badge>
                                Depth: {tone.settings.effects.chorus.depth} | Rate: {tone.settings.effects.chorus.rate}
                            </div>
                        )}
                        {tone.settings.effects.delay?.engaged && (
                            <div className="effect-detail">
                                <Badge variant="effect">{tone.settings.effects.delay.name || "Delay"}</Badge>
                                Time: {tone.settings.effects.delay.time} | Fback: {tone.settings.effects.delay.feedback} | Mix: {tone.settings.effects.delay.mix}
                            </div>
                        )}
                        {tone.settings.effects.reverb?.engaged && (
                            <div className="effect-detail">
                                <Badge variant="effect">{tone.settings.effects.reverb.name || "Reverb"}</Badge>
                                Decay: {tone.settings.effects.reverb.decay} | Mix: {tone.settings.effects.reverb.mix}
                            </div>
                        )}
                        {!tone.settings.effects.compressor?.engaged && !tone.settings.effects.overdrive?.engaged && !tone.settings.effects.delay?.engaged && !tone.settings.effects.reverb?.engaged && !tone.settings.effects.chorus?.engaged && (
                            <p className="text-muted">No post-effects engaged.</p>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ToneDetail;
