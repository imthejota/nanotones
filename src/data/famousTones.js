// Famous Tones using EXACT Nano Cortex Factory ID mappings

export const famousTones = [
    // --- ORIGINAL 20 TONES ---
    {
        id: "t1", artist: "Slash", song: "Sweet Child O' Mine", genre: "Rock",
        description: "Thick, singing neck pickup lead tone driven by a Marshall Jubilee.",
        settings: {
            capture: "c4", ir: "ir1",
            knobs: { gain: 7.5, bass: 6, mid: 7, treble: 5, amount: 8, level: 6 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Green 808", drive: 20, tone: 60, level: 80 }, delay: { engaged: true, name: "Digital Delay", time: 45, feedback: 30, mix: 20 }, reverb: { engaged: true, name: "Hall", decay: 40, mix: 25 } }
        }
    },
    {
        id: "t2", artist: "John Petrucci", song: "Pull Me Under", genre: "Metal",
        description: "Tight, articulate high-gain Mesa tone. Scooped mids on the amp, tight 4x12 cab in the room.",
        settings: {
            capture: "c7", ir: "ir3",
            knobs: { gain: 8.5, bass: 7, mid: 4.5, treble: 8, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, chorus: { engaged: true, name: "Dream Chorus", depth: 40, rate: 30 }, delay: { engaged: true, name: "Digital Delay", time: 60, feedback: 35, mix: 25 } }
        }
    },
    {
        id: "t3", artist: "Adam Jones (Tool)", song: "Schism", genre: "Metal",
        description: "Throaty, percussive rhythm tone using the Diezel VH4 Ch3 capture.",
        settings: {
            capture: "c13", ir: "ir3",
            knobs: { gain: 6.5, bass: 6, mid: 8, treble: 6, amount: 7, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, delay: { engaged: true, name: "Analog Delay", time: 30, feedback: 25, mix: 15 } }
        }
    },
    {
        id: "t4", artist: "James Hetfield", song: "Enter Sandman", genre: "Metal",
        description: "Classic tight thrash metal rhythm wall of sound.",
        settings: {
            capture: "c12", ir: "ir3",
            knobs: { gain: 8, bass: 8, mid: 3, treble: 8.5, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, reverb: { engaged: true, name: "Mind Hall", decay: 50, mix: 18 } }
        }
    },
    {
        id: "t5", artist: "Eddie Van Halen", song: "Panama", genre: "Rock",
        description: "The 'Brown Sound' emulation using the Peavey 5150 Signature capture.",
        settings: {
            capture: "c16", ir: "ir1",
            knobs: { gain: 7, bass: 5.5, mid: 6, treble: 7.5, amount: 8, level: 6 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, delay: { engaged: true, name: "Tape Delay", time: 35, feedback: 30, mix: 20 }, reverb: { engaged: true, name: "Hall", decay: 35, mix: 20 } }
        }
    },
    {
        id: "t6", artist: "The Edge (U2)", song: "Where the Streets Have No Name", genre: "Indie/Clean",
        description: "Chimey Matchless Chieftain tone with rhythmic modulated dotted-eighth delay.",
        settings: {
            capture: "c15", ir: "ir4",
            knobs: { gain: 5, bass: 5, mid: 6, treble: 8.5, amount: 5, level: 6 },
            effects: { compressor: { engaged: true, name: "Legendary 87", sustain: 45, level: 40 }, delay: { engaged: true, name: "Digital Delay", time: 35, feedback: 45, mix: 45 }, reverb: { engaged: true, name: "Mind Hall", decay: 60, mix: 25 } }
        }
    },
    {
        id: "t7", artist: "David Gilmour", song: "Shine On You Crazy Diamond", genre: "Rock",
        description: "Massive, clean, compressed sustain with chorus and delay using a Hiwatt clean capture.",
        settings: {
            capture: "c19", ir: "ir1",
            knobs: { gain: 4, bass: 6, mid: 6.5, treble: 7, amount: 4, level: 7 },
            effects: { compressor: { engaged: true, name: "Solid State Comp", sustain: 50, level: 50 }, chorus: { engaged: true, name: "Chief CE2W", depth: 60, rate: 20 }, delay: { engaged: true, name: "Analog Delay", time: 40, feedback: 35, mix: 30 }, reverb: { engaged: true, name: "Room", decay: 45, mix: 25 } }
        }
    },
    {
        id: "t8", artist: "John Frusciante", song: "Under the Bridge", genre: "Indie/Clean",
        description: "Jangle and bite clean tone, slightly compressed, using the Marshall Jubilee rhythm channel.",
        settings: {
            capture: "c5", ir: "ir1",
            knobs: { gain: 3.5, bass: 5, mid: 6, treble: 7, amount: 3, level: 8 },
            effects: { compressor: { engaged: true, name: "Solid State Comp", sustain: 40, level: 45 }, chorus: { engaged: true, name: "Chief CE2W", depth: 40, rate: 35 }, reverb: { engaged: true, name: "Room", decay: 35, mix: 20 } }
        }
    },
    {
        id: "t9", artist: "The Strokes", song: "Reptilia", genre: "Indie/Clean",
        description: "Direct, punchy garage rock overdrive using the pushed Fender Hot Rod Deluxe.",
        settings: {
            capture: "c17", ir: "ir4",
            knobs: { gain: 6.5, bass: 5, mid: 7, treble: 7.5, amount: 6, level: 7 },
            effects: { overdrive: { engaged: true, name: "Obsessive Drive", drive: 60, tone: 75, level: 50 }, reverb: { engaged: true, name: "Room", decay: 25, mix: 15 } }
        }
    },
    {
        id: "t10", artist: "Steve Vai", song: "For The Love of God", genre: "Rock",
        description: "Liquid, endless sustain lead using the Bogner Ecstasy Ch3.",
        settings: {
            capture: "c3", ir: "ir3",
            knobs: { gain: 8, bass: 6, mid: 7.5, treble: 6.5, amount: 9, level: 6 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Green 808", drive: 30, tone: 60, level: 85 }, delay: { engaged: true, name: "Digital Delay", time: 50, feedback: 40, mix: 30 }, reverb: { engaged: true, name: "Mind Hall", decay: 65, mix: 35 } }
        }
    },
    {
        id: "t11", artist: "Stevie Ray Vaughan", song: "Pride and Joy", genre: "Blues",
        description: "Classic biting Texas blues tone. Fender style with mid emphasis.",
        settings: {
            capture: "c18", ir: "ir2",
            knobs: { gain: 4, bass: 6, mid: 8, treble: 7, amount: 5, level: 6 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 45, tone: 60, level: 70 }, reverb: { engaged: true, name: "Room", decay: 35, mix: 20 } }
        }
    },
    {
        id: "t12", artist: "Mike Campbell", song: "Refugee", genre: "Rock",
        description: "Classic heartland rock chime. Crisp Fender Princeton with slight edge.",
        settings: {
            capture: "c18", ir: "ir2",
            knobs: { gain: 5, bass: 5, mid: 6, treble: 7, amount: 3, level: 7 },
            effects: { compressor: { engaged: true, name: "Legendary 87", sustain: 35, level: 45 }, reverb: { engaged: true, name: "Room", decay: 30, mix: 25 } }
        }
    },
    {
        id: "t13", artist: "Jerry Cantrell", song: "Man in the Box", genre: "Metal",
        description: "Thick, chewy Bogner Fish grit and midrange growl.",
        settings: {
            capture: "c1", ir: "ir3",
            knobs: { gain: 7.5, bass: 6, mid: 7, treble: 6, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, reverb: { engaged: true, name: "Hall", decay: 25, mix: 15 } }
        }
    },
    {
        id: "t14", artist: "Steve Lukather", song: "Rosanna", genre: "Rock",
        description: "Smooth, compressed studio lead tone.",
        settings: {
            capture: "c11", ir: "ir3",
            knobs: { gain: 7, bass: 5, mid: 6.5, treble: 6, amount: 7, level: 6 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, chorus: { engaged: true, name: "Dream Chorus", depth: 50, rate: 25 }, delay: { engaged: true, name: "Tape Delay", time: 45, feedback: 30, mix: 30 }, reverb: { engaged: true, name: "Hall", decay: 45, mix: 25 } }
        }
    },
    {
        id: "t15", artist: "Trey Anastasio", song: "Chalk Dust Torture", genre: "Rock",
        description: "Boutique, touch sensitive Komet overdrive.",
        settings: {
            capture: "c10", ir: "ir4",
            knobs: { gain: 6, bass: 5.5, mid: 7.5, treble: 6, amount: 6, level: 7 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 50, tone: 65, level: 60 }, reverb: { engaged: true, name: "Room", decay: 40, mix: 20 } }
        }
    },
    {
        id: "t16", artist: "Justin Chancellor", song: "Forty Six & 2", genre: "Bass",
        description: "Punchy, aggressive midrange bass tone using Mesa Carbine.",
        settings: {
            capture: "c23", ir: "ir5",
            knobs: { gain: 6, bass: 6, mid: 8, treble: 7, amount: 5, level: 8 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, chorus: { engaged: true, name: "Dream Chorus", depth: 70, rate: 15 } }
        }
    },
    {
        id: "t17", artist: "Geddy Lee", song: "Tom Sawyer", genre: "Bass",
        description: "Driving, bright, slightly overdriven Ampeg SVT tone.",
        settings: {
            capture: "c22", ir: "ir5",
            knobs: { gain: 6.5, bass: 5, mid: 7.5, treble: 8, amount: 6, level: 8 },
            effects: { overdrive: { engaged: true, name: "Microtubes B3K", drive: 60, tone: 50, level: 50 } }
        }
    },
    {
        id: "t18", artist: "Cliff Burton", song: "For Whom the Bell Tolls", genre: "Bass",
        description: "Heavily distorted bass tone with Wah.",
        settings: {
            capture: "c24", ir: "ir5",
            knobs: { gain: 8, bass: 6, mid: 5, treble: 7, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, wah: { engaged: true, name: "Bubba Wah", position: 50 }, overdrive: { engaged: true, name: "Rodent Drive", drive: 80, tone: 40, level: 60 } }
        }
    },
    {
        id: "t19", artist: "Chris Wolstenholme", song: "Hysteria", genre: "Bass",
        description: "Synthesizer-like fuzz bass using Animato emulation.",
        settings: {
            capture: "c25", ir: "ir5",
            knobs: { gain: 9, bass: 7, mid: 6, treble: 6, amount: 9, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" } }
        }
    },
    {
        id: "t20", artist: "Krist Novoselic", song: "Smells Like Teen Spirit", genre: "Bass",
        description: "Deep, thumping grunge bass tone with slight grit.",
        settings: {
            capture: "c22", ir: "ir5",
            knobs: { gain: 5, bass: 8, mid: 5, treble: 6, amount: 5, level: 8 },
            effects: { chorus: { engaged: true, name: "Dream Chorus", depth: 50, rate: 25 } }
        }
    },

    // --- 25 NEW TONES (t21 to t45) ---

    {
        id: "t21", artist: "Kirk Hammett", song: "Master of Puppets", genre: "Metal",
        description: "Aggressive scooped mids thrash metal rhythm, heavily gated.",
        settings: {
            capture: "c12", ir: "ir3",
            knobs: { gain: 8.5, bass: 8, mid: 2.5, treble: 8.5, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Utility Gate" } }
        }
    },
    {
        id: "t22", artist: "Dimebag Darrell", song: "Walk", genre: "Metal",
        description: "Piercing, ultra-tight mid-boosted metal terror.",
        settings: {
            capture: "c16", ir: "ir3",
            knobs: { gain: 9, bass: 7.5, mid: 8, treble: 9, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Obsessive Drive", drive: 10, tone: 80, level: 90 } }
        }
    },
    {
        id: "t23", artist: "Angus Young", song: "Back in Black", genre: "Rock",
        description: "Pure, pushed Marshall crunch. Minimal gain, maximum attack.",
        settings: {
            capture: "c5", ir: "ir1",
            knobs: { gain: 5.5, bass: 6, mid: 7.5, treble: 6.5, amount: 7, level: 8 },
            effects: {}
        }
    },
    {
        id: "t24", artist: "Jimi Hendrix", song: "Voodoo Child", genre: "Blues",
        description: "Psychedelic stratocaster blues with edge.",
        settings: {
            capture: "c15", ir: "ir1",
            knobs: { gain: 7.5, bass: 5, mid: 6, treble: 7.5, amount: 6, level: 7 },
            effects: { overdrive: { engaged: true, name: "Obsessive Drive", drive: 75, tone: 60, level: 60 }, reverb: { engaged: true, name: "Room", decay: 40, mix: 20 } }
        }
    },
    {
        id: "t25", artist: "John Mayer", song: "Slow Dancing in a Burning Room", genre: "Blues",
        description: "Smooth, slightly compressed boutique amp clean tone.",
        settings: {
            capture: "c19", ir: "ir4",
            knobs: { gain: 4, bass: 5.5, mid: 6.5, treble: 6.5, amount: 4, level: 7 },
            effects: { compressor: { engaged: true, name: "Legendary 87", sustain: 40, level: 45 }, reverb: { engaged: true, name: "Hall", decay: 50, mix: 25 } }
        }
    },
    {
        id: "t26", artist: "Carlos Santana", song: "Black Magic Woman", genre: "Rock",
        description: "Singing sustain, dark and creamy lead overdrive.",
        settings: {
            capture: "c8", ir: "ir3",
            knobs: { gain: 6.5, bass: 5.5, mid: 7.5, treble: 5, amount: 7, level: 7 },
            effects: { delay: { engaged: true, name: "Analog Delay", time: 30, feedback: 25, mix: 20 }, reverb: { engaged: true, name: "Mind Hall", decay: 45, mix: 20 } }
        }
    },
    {
        id: "t27", artist: "Joe Walsh", song: "Hotel California (Solo)", genre: "Rock",
        description: "70s classic rock epic dual lead tone.",
        settings: {
            capture: "c5", ir: "ir1",
            knobs: { gain: 6, bass: 6, mid: 6.5, treble: 6.5, amount: 6, level: 7 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 40, tone: 50, level: 70 }, delay: { engaged: true, name: "Tape Delay", time: 40, feedback: 30, mix: 25 } }
        }
    },
    {
        id: "t28", artist: "Mike McCready", song: "Yellow Ledbetter", genre: "Rock",
        description: "Liquid Hendrix-style Stratocaster vibe with light chorus mod.",
        settings: {
            capture: "c18", ir: "ir2",
            knobs: { gain: 4.5, bass: 5, mid: 5.5, treble: 7.5, amount: 5, level: 7 },
            effects: { chorus: { engaged: true, name: "MX Vibes", depth: 45, rate: 35 }, reverb: { engaged: true, name: "Room", decay: 60, mix: 35 } }
        }
    },
    {
        id: "t29", artist: "Mark Knopfler", song: "Sultans of Swing", genre: "Rock",
        description: "Ultra clean, highly compressed fingerstyle Strat quack.",
        settings: {
            capture: "c18", ir: "ir2",
            knobs: { gain: 2.5, bass: 5, mid: 6, treble: 8.5, amount: 3, level: 8 },
            effects: { compressor: { engaged: true, name: "Solid State Comp", sustain: 70, level: 60 }, reverb: { engaged: true, name: "Room", decay: 35, mix: 20 } }
        }
    },
    {
        id: "t30", artist: "B.B. King", song: "The Thrill is Gone", genre: "Blues",
        description: "Lucille's crying, sweet out-of-phase semi-hollow body clean.",
        settings: {
            capture: "c19", ir: "ir4",
            knobs: { gain: 4, bass: 5, mid: 7, treble: 8, amount: 4, level: 8 },
            effects: { reverb: { engaged: true, name: "Room", decay: 45, mix: 30 } }
        }
    },
    {
        id: "t31", artist: "Randy Rhoads", song: "Crazy Train", genre: "Metal",
        description: "Biting, mid-heavy 80s metal shred tone with tight delay.",
        settings: {
            capture: "c4", ir: "ir1",
            knobs: { gain: 8, bass: 5, mid: 7.5, treble: 8, amount: 8, level: 6 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, chorus: { engaged: true, name: "MX Flanger", depth: 20, rate: 15 }, delay: { engaged: true, name: "Digital Delay", time: 5, feedback: 0, mix: 20 } } // doubling delay
        }
    },
    {
        id: "t32", artist: "Jimmy Page", song: "Whole Lotta Love", genre: "Rock",
        description: "Raw, unadulterated Les Paul into pushed stack power.",
        settings: {
            capture: "c4", ir: "ir1",
            knobs: { gain: 6, bass: 6, mid: 6, treble: 6.5, amount: 7, level: 7 },
            effects: { reverb: { engaged: true, name: "Hall", decay: 20, mix: 10 } }
        }
    },
    {
        id: "t33", artist: "Dave Grohl", song: "Everlong", genre: "Rock",
        description: "Huge, dense 90s alternative rock rhythm.",
        settings: {
            capture: "c8", ir: "ir3",
            knobs: { gain: 7.5, bass: 6.5, mid: 6, treble: 7, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Utility Gate" } }
        }
    },
    {
        id: "t34", artist: "Stone Gossard", song: "Alive", genre: "Rock",
        description: "Gritty, mid-scooped grunge arena rock lead.",
        settings: {
            capture: "c12", ir: "ir1",
            knobs: { gain: 7, bass: 5, mid: 4, treble: 7, amount: 7, level: 6 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 50, tone: 60, level: 60 } }
        }
    },
    {
        id: "t35", artist: "SRV", song: "Lenny", genre: "Blues",
        description: "Beautiful, fragile, bell-like Stratocaster neck tone.",
        settings: {
            capture: "c18", ir: "ir2",
            knobs: { gain: 3.5, bass: 4.5, mid: 5.5, treble: 8, amount: 3, level: 8 },
            effects: { compressor: { engaged: true, name: "Legendary 87", sustain: 30, level: 50 }, reverb: { engaged: true, name: "Room", decay: 60, mix: 35 } }
        }
    },
    {
        id: "t36", artist: "Andy Summers", song: "Message in a Bottle", genre: "Indie/Clean",
        description: "Classic 80s chorus-drenched clean tone.",
        settings: {
            capture: "c18", ir: "ir4",
            knobs: { gain: 4, bass: 5, mid: 5, treble: 8, amount: 4, level: 7 },
            effects: { chorus: { engaged: true, name: "Chief CE2W", depth: 75, rate: 30 }, reverb: { engaged: true, name: "Mind Hall", decay: 40, mix: 20 } }
        }
    },
    {
        id: "t37", artist: "Kurt Cobain", song: "Come as You Are", genre: "Indie/Clean",
        description: "Eerie, deep watery chorus on a pristine clean channel.",
        settings: {
            capture: "c8", ir: "ir4", // Studio Preamp
            knobs: { gain: 3, bass: 6, mid: 5, treble: 7, amount: 3, level: 8 },
            effects: { chorus: { engaged: true, name: "Dream Chorus", depth: 85, rate: 45 } }
        }
    },
    {
        id: "t38", artist: "Nile Rodgers", song: "Le Freak", genre: "Pop",
        description: "Super tight, compressed, percussive funk Stratocaster.",
        settings: {
            capture: "c18", ir: "ir2",
            knobs: { gain: 2.5, bass: 4, mid: 6, treble: 8.5, amount: 3, level: 8 },
            effects: { compressor: { engaged: true, name: "Solid State Comp", sustain: 80, level: 70 } }
        }
    },
    {
        id: "t39", artist: "Chris Squire", song: "Roundabout", genre: "Bass",
        description: "Clanky, aggressive prog rock Rickenbacker bass tone.",
        settings: {
            capture: "c22", ir: "ir5",
            knobs: { gain: 7, bass: 5, mid: 8, treble: 8.5, amount: 6, level: 8 },
            effects: { overdrive: { engaged: true, name: "Obsessive Drive", drive: 30, tone: 80, level: 50 } }
        }
    },
    {
        id: "t40", artist: "Roger Waters", song: "Money", genre: "Bass",
        description: "Round, punchy classic rock P-Bass picked with attitude.",
        settings: {
            capture: "c21", ir: "ir5",
            knobs: { gain: 5.5, bass: 7, mid: 6, treble: 5, amount: 5, level: 7 },
            effects: {}
        }
    },
    {
        id: "t41", artist: "Alex Lifeson", song: "Tom Sawyer (Guitar)", genre: "Rock",
        description: "Wide, sweeping flanger over an overdriven tube amp.",
        settings: {
            capture: "c20", ir: "ir3",
            knobs: { gain: 6.5, bass: 5, mid: 6.5, treble: 7.5, amount: 6, level: 7 },
            effects: { chorus: { engaged: true, name: "MX Flanger", depth: 60, rate: 5 }, delay: { engaged: true, name: "Digital Delay", time: 30, feedback: 25, mix: 20 } }
        }
    },
    {
        id: "t42", artist: "Brian May", song: "Bohemian Rhapsody", genre: "Rock",
        description: "Layered, orchestral mid-boosted overdrive majesty.",
        settings: {
            capture: "c15", ir: "ir1",
            knobs: { gain: 7, bass: 4, mid: 9, treble: 6, amount: 7, level: 7 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 20, tone: 40, level: 90 }, delay: { engaged: true, name: "Analog Delay", time: 80, feedback: 40, mix: 25 } }
        }
    },
    {
        id: "t43", artist: "Eric Johnson", song: "Cliffs of Dover", genre: "Rock",
        description: "Liquid violin-like sustain, extremely smooth overdrive.",
        settings: {
            capture: "c4", ir: "ir1", // Jubilee can do a decent violin tone
            knobs: { gain: 6.5, bass: 6, mid: 7.5, treble: 4.5, amount: 7, level: 6 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 25, tone: 40, level: 70 }, delay: { engaged: true, name: "Tape Delay", time: 42, feedback: 40, mix: 35 }, reverb: { engaged: true, name: "Hall", decay: 65, mix: 30 } }
        }
    },
    {
        id: "t44", artist: "Synyster Gates", song: "Bat Country", genre: "Metal",
        description: "Modern, extremely tight and percussive high-gain scoop.",
        settings: {
            capture: "c14", ir: "ir3", // ENGL Powerball
            knobs: { gain: 8.5, bass: 8.5, mid: 3, treble: 8.5, amount: 9, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, delay: { engaged: true, name: "Digital Delay", time: 50, feedback: 25, mix: 15 } }
        }
    },
    {
        id: "t45", artist: "Brad Paisley", song: "Ticks", genre: "Country",
        description: "Hyper-clean, snappy 'chicken pickin' telecaster twang.",
        settings: {
            capture: "c15", ir: "ir2", // Matchless or Princeton for twang
            knobs: { gain: 3.5, bass: 4.5, mid: 5, treble: 9, amount: 4, level: 8 },
            effects: { compressor: { engaged: true, name: "Solid State Comp", sustain: 50, level: 60 }, delay: { engaged: true, name: "Analog Delay", time: 12, feedback: 10, mix: 40 } } // Slapback delay
        }
    },
    {
        id: "t46", artist: "Steve Vai", song: "Tender Surrender", genre: "Rock",
        description: "Smooth, singing octave-fuzz infused neck pickup lead tone.",
        settings: {
            capture: "c15", ir: "ir1",
            knobs: { gain: 5, bass: 6, mid: 7, treble: 6.5, amount: 6, level: 7 },
            effects: { overdrive: { engaged: true, name: "Green 808", drive: 40, tone: 50, level: 70 }, delay: { engaged: true, name: "Digital Delay", time: 45, feedback: 30, mix: 25 }, reverb: { engaged: true, name: "Hall", decay: 50, mix: 30 } }
        }
    },
    {
        id: "t47", artist: "Steve Vai", song: "Bad Horsie", genre: "Metal",
        description: "Heavy, dropped-tuning aggressive rhythm with a tight gate and Wah.",
        settings: {
            capture: "c3", ir: "ir3",
            knobs: { gain: 8.5, bass: 7, mid: 7.5, treble: 8, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, wah: { engaged: true, name: "Bubba Wah", position: 40 }, overdrive: { engaged: true, name: "Obsessive Drive", drive: 20, tone: 60, level: 80 } }
        }
    },
    {
        id: "t48", artist: "Joe Satriani", song: "Surfing with the Alien", genre: "Rock",
        description: "Singing, sustaining legato lead tone with delay.",
        settings: {
            capture: "c4", ir: "ir1",
            knobs: { gain: 7.5, bass: 5, mid: 8, treble: 6, amount: 7, level: 6 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Green 808", drive: 30, tone: 50, level: 80 }, delay: { engaged: true, name: "Digital Delay", time: 35, feedback: 35, mix: 30 }, reverb: { engaged: true, name: "Hall", decay: 40, mix: 20 } }
        }
    },
    {
        id: "t49", artist: "Joe Satriani", song: "Always With Me, Always With You", genre: "Rock",
        description: "Fluid, highly melodic crunch lead tone.",
        settings: {
            capture: "c2", ir: "ir1",
            knobs: { gain: 6, bass: 5.5, mid: 7, treble: 6.5, amount: 6, level: 7 },
            effects: { chorus: { engaged: true, name: "Chief CE2W", depth: 40, rate: 20 }, delay: { engaged: true, name: "Tape Delay", time: 40, feedback: 30, mix: 25 }, reverb: { engaged: true, name: "Mind Hall", decay: 45, mix: 25 } }
        }
    },
    {
        id: "t50", artist: "Yngwie Malmsteen", song: "Black Star", genre: "Metal",
        description: "Neo-classical shred tone. Pushed vintage stack with fierce overdrive.",
        settings: {
            capture: "c20", ir: "ir1", // Using driven Hiwatt or Marshall
            knobs: { gain: 7, bass: 4.5, mid: 8.5, treble: 8, amount: 7, level: 7 },
            effects: { gate: { engaged: true, name: "Utility Gate" }, overdrive: { engaged: true, name: "Green 808", drive: 60, tone: 70, level: 80 }, delay: { engaged: true, name: "Analog Delay", time: 20, feedback: 15, mix: 15 } }
        }
    },
    {
        id: "t51", artist: "Yngwie Malmsteen", song: "Far Beyond the Sun", genre: "Metal",
        description: "Aggressive, biting lead tone suitable for high-speed picking.",
        settings: {
            capture: "c5", ir: "ir1",
            knobs: { gain: 7.5, bass: 5, mid: 9, treble: 8.5, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Obsessive Drive", drive: 40, tone: 80, level: 85 }, reverb: { engaged: true, name: "Room", decay: 30, mix: 15 } }
        }
    },
    {
        id: "t52", artist: "David Gilmour", song: "Comfortably Numb (Solo 2)", genre: "Rock",
        description: "Massive, sustaining epic fuzz/drive tone bathed in delay.",
        settings: {
            capture: "c19", ir: "ir1",
            knobs: { gain: 4, bass: 6, mid: 7.5, treble: 6.5, amount: 4, level: 6 },
            effects: { overdrive: { engaged: true, name: "Rodent Drive", drive: 75, tone: 60, level: 70 }, chorus: { engaged: true, name: "MX Flanger", depth: 15, rate: 10 }, delay: { engaged: true, name: "Analog Delay", time: 48, feedback: 40, mix: 35 }, reverb: { engaged: true, name: "Hall", decay: 50, mix: 25 } }
        }
    },
    {
        id: "t53", artist: "David Gilmour", song: "Run Like Hell", genre: "Rock",
        description: "Punchy, rhythmic clean tone layered with precise dotted-eighth delay and flange.",
        settings: {
            capture: "c19", ir: "ir4",
            knobs: { gain: 3.5, bass: 5.5, mid: 6, treble: 8, amount: 3, level: 8 },
            effects: { compressor: { engaged: true, name: "Solid State Comp", sustain: 50, level: 60 }, chorus: { engaged: true, name: "MX Flanger", depth: 55, rate: 25 }, delay: { engaged: true, name: "Digital Delay", time: 38, feedback: 40, mix: 45 } }
        }
    },
    {
        id: "t54", artist: "Walter Giardino", song: "Mujer Amante", genre: "Metal",
        description: "Smooth neo-classical hard rock lead, very liquid and melodic.",
        settings: {
            capture: "c4", ir: "ir1",
            knobs: { gain: 7.5, bass: 5.5, mid: 8.5, treble: 7.5, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Green 808", drive: 30, tone: 60, level: 80 }, delay: { engaged: true, name: "Tape Delay", time: 40, feedback: 30, mix: 25 }, reverb: { engaged: true, name: "Hall", decay: 45, mix: 25 } }
        }
    },
    {
        id: "t55", artist: "Walter Giardino", song: "La Leyenda del Hada y el Mago", genre: "Metal",
        description: "High energy, fast-paced heavy metal riff and shred tone.",
        settings: {
            capture: "c20", ir: "ir3",
            knobs: { gain: 8, bass: 6, mid: 7.5, treble: 8.5, amount: 8, level: 7 },
            effects: { gate: { engaged: true, name: "Adaptive Gate" }, overdrive: { engaged: true, name: "Obsessive Drive", drive: 40, tone: 70, level: 80 }, delay: { engaged: true, name: "Digital Delay", time: 30, feedback: 20, mix: 20 } }
        }
    }
];
