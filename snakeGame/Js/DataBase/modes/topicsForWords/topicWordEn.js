/* Данный класс содержит темы слов на En. */

class TopicWordEn extends TopicWordRu
{
  // Рыбы
  topicFishsEn()
  {
    let words = 
    [
      "uromegarei", "sparkling_geophagus", "jumping_characin", "bristlemouth", "sand_tiger_shark", "yellowmargin_triggerfish", "chubsucker", "red_piranha", "hairtail", "toadfish",
      "tiger_shark", "granulated_catfish", "noodlefish", "airsac_catfish", "oriental_snakehead", "blind_shark", "parallel_striped_mbuna", "trumpetfish", "gizzard_shad", "carp",
      "wolffish", "channel_bass", "xiphophorus_roseni", "queensland_cusk", "yellowtail_barracuda", "eel_cod", "dojo_loach", "south_american_lungfish", "vermilion_rockfish", "xenophysogobio_boulengeri",
      "gar", "utah_lake_sculpin", "marblefish", "whalefish", "halosaur", "giant_danio", "lemon_fin_barb", "spotted_barb", "goldeye", "conger_eel",
      "black_darter_tetra", "tiger_barb", "weatherfish", "sawtooth_eel", "tapah_catfish", "red_tailed_labeo", "masked_julie", "chankaensis_bitterling", "forehead_brooder", "clay_hoplo",
      "velvet_dogfish", "bigeye_squaretail", "sterbas_corydoras", "deepwater_hap", "copper_mouthbrooder", "marlier's_julie", "leporinus", "fly_river_rainbowfish", "dace", "lapradei_nile_bichir",
      "scup", "barfish", "quillback_rockfish", "two_spot_barb", "blackchin", "girardinus", "african_broad_band_darter", "dusky_grouper", "saber_toothed_blenny", "spiny_dwarf_catfish",
      "thresher_shark", "five_banded_barb", "gulf_menhaden", "candlefish", "bluntnose_knifefish", "spotted_african_lungfish", "golden_julie", "yellow_tang", "banded_barb", "velvetfish",
      "moses_sole", "golden_mbuna", "jaguar_catfish", "uruguay_river_sprat", "alaska_blackfish", "redfish", "monkfish", "mandarinfish", "marbled_sleeper_goby", "mummichog",
      "five_bar_cichlid", "platinum_tetra", "ling_cod", "uncombed_blenny", "edible_gourami", "flashlight_fish", "xenomystax_trucidans", "african_lungfish", "freshwater_hatchetfish", "parkinson's_rainbowfish",
      "yellow_weaver", "kelpfish", "pupfish", "striped_headstander", "smallmouth_buffalo", "ungusurculus_riauensis", "ponyfish", "long_finned_barb", "gray_reef_shark", "dwarf_pencilfish",
      "stoliczkas_loach", "whale_shark", "orangestriped_triggerfish", "golden_trout", "pelagic_cod", "cinnamon_killifish", "malawi_eye_biter", "sole", "wels_catfish", "pollen's_cichlid",
      "barracuda", "scissortail_rasbora", "blackfish", "benny_tetra", "albino_tiger_barb", "spotted_climbing_perch", "african_wood_catfish", "houndshark", "spotted_piranha", "black_piranha",
      "umpqua_chub", "darter", "squirrelfish", "striped_snakehead", "pacific_albacore", "slender_tail_hap", "yellow_moray", "crystal_tetra", "pretty_pleco", "fork_tailed_lamprologus",
      "gertrude's_blue_eye", "hamlet", "ghost_shark", "xiurenbagrus_xiurenensis", "queensland_mackerel", "xenocypris_davidi", "spanish_mackerel", "rudderfish", "central_mudminnow", "indonesian_bamboo_shark",
      "leptosoma_cichlid", "tire_track_eel", "southern_sandfish", "ziege", "fighting_loach", "hi_fin_banded_shark", "shovelnose_catfish", "alabama_hog_sucker", "dolphin_catfish", "long_finned_pike",
      "new_world_rivuline", "barreleye", "lampfish", "zebra_danios", "lungfish", "lake_chub", "sturgeon", "talking_catfish", "queensland_lungfish", "torrent_catfish",
      "upper_zambesi_squeaker", "varicorhinus_platystomus", "frogfish", "xenocypris_hupeinensis", "obese_synodontis", "axelrod's_rainbowfish", "capelin", "two_lined_pencilfish", "silver_hatchetfish", "silver_prochilodus",
      "blue_catfish", "penang_mouthbrooding_fighter", "xyrichtys_cyanifrons", "quakerfish", "rio_grande_perch", "trout", "uncisudis_posteropelvis", "sandroller", "apollo_shark", "queensland_shark",
      "pineconefish", "bramble_shark", "queensland_stinkfish", "bonnethead_shark", "red_rasbora", "ventrifossa_longibarbata", "bangus", "tiger_characin", "red_breast_acara", "channel_catfish",
      "upeneus_australiae", "queensland_seahorse", "brown_trout", "cyan_hap", "gunnel", "ribbon_eel", "sucker_barb", "xenotilapia_burtoni", "cutter's_cichlid", "colorado_squawfish",
      "upper_zambezi_yellowfish", "sand_tilefish", "flag_cichlid", "banded_killifish", "pittier's_tetra", "long_nosed_loach", "mark_sandperch", "liver_catfish", "shortnose_chimaera", "ocellated_loach",
      "zebra_pleco", "longnose_lancetfish", "ansorge's_neolebias", "upeneichthys_stotti", "rummynose_tetra", "armored_catfish", "haitian_cichlid", "armor_bill_tetra", "sawfish", "pacific_salmon",
      "piraiba_catfish", "red_fin_otocinclus", "golden_dwarf_cichlid", "xenocyprioides_carinatus", "millions_fish", "minnow", "malawi_golden_cichlid", "leopard_danio", "squaretail", "blue_shark",
      "barb", "hawkfish", "cookiecutter_shark", "decorated_synodontis", "xyrichtys_incandescens", "dusky_piranha", "port_jackson_shark", "uranoscopus_fuscomaculatus", "sand_dab", "striped_lamprologus",
      "asian_bumblebee_catfish", "brook_stickleback", "eagle_ray", "clown_loach", "ghost_flathead", "armored_searobin", "oceanic_whitetip_shark", "bitterling", "penguin_tetra", "mudskipper",
      "aurora_cichlid", "dolly_varden_trout", "river_loach", "rock_bass", "hickory_shad", "sailfin_silverside", "long_whiskered_catfish", "black_spot_barb", "xystreurys_rasile", "deepwater_stingray",
      "seahorse", "lemon_algae_eater", "nobol_distichodus", "malawi_blue_dolphin", "limia", "florida_gar", "clown_triggerfish", "flame_tetra", "arched_corydoras", "jordan's_catfish",
      "orbicular_velvetfish", "pikeperch", "duckbill", "butterfly_ray", "barbeled_dragonfish", "smelt_whiting", "spookfish", "betta", "ventrifossa_rhipidodorsalis", "speckled_trout",
      "pinktailed_chaleus", "harrison's_pencilfish", "six_barred_epiplatys", "bandit_cory", "upside_down_goby", "ghost_fish", "dorsey's_pimelodid", "rockweed_gunnel", "three_spot_tetra", "stout_moray",
      "humuhumunukunukuapua'a", "featherfin", "sea_lamprey", "denison's_flying_fox", "large_scaled_barb", "pike_piranha", "northern_hog_sucker", "xenochromis_hecqui", "lemon_sole", "eucla_cod",
      "silver_dollar", "springfish", "sauger", "xenistius_peruanus", "flagfish", "parore", "purple_spotted_gudgeon", "giraffe_catfish", "umbrina_milliae", "black_widow_tetra",
      "nicaragua_cichlid", "razorback_sucker", "laticeps_stingray", "panda_dwarf_cichlid", "rock_beauty", "antenna_codlet", "wimple_piranha", "horsefish", "beaked_salmon", "rohu",
      "silver_cichlid", "striped_julie", "mexican_tetra", "notothen", "dorado", "carolina_pigmy_sunfish", "great_white_shark", "beauforti's_loach", "livingstoni", "golden_zebra_loach",
      "uranoscopus_guttatus", "sae", "long_finned_african_tetra", "frilled_shark", "cuban_gar", "unarmed_dwarf_monocle_bream", "variabilichromis_moorii", "cod", "sumatran_barb", "temperate_ocean_bass",
      "elephant_fish", "shrimpfish", "western_mosquitofish", "callolepis_cichlid", "dwarf_distichodus", "sucker", "xyrichtys_virens", "chinese_paradise_fish", "european_chub", "bream",
      "banjo", "ropefish", "devil_ray", "ornate_pimelodus", "albino_fetivum", "bat_ray", "riffle_dace", "fusilier_fish", "u_spot_wrasse", "wolf_tetra",
      "spotted_cachorro", "knight_gobie", "muskellunge", "red_base_tetra", "uruguay_tetra", "tilapia", "purple_headed_barb", "yellowhead_jawfish", "ornate_ctenopoma", "cobalt_cichlid",
      "billfish", "lake_trout", "píntano", "slender_hemiodus", "lumpsucker", "twig_catfish", "sleepy_cod", "grant's_peacock_cichlid", "longnose_whiptail_catfish", "rainbow_trout",
      "upeneus_mouthami", "asiatic_knifefish", "umpqua_squawfish", "xenotilapia_caudafasciata", "ocean_perch", "black_finned_doradid", "powen", "black_scalyfin", "longfin", "cape_york_rainbowfish",
      "cichlid", "glowlight_tetra", "rivuline", "needle_fin_eater", "xyliphius_barbatus", "yellowback_fusilier", "xiphophorus_hellerii", "peter's_elephantnose", "vermilion_snapper", "spotted_pike_characin",
      "eel_goby", "red_aphyosemion", "ussuri_sharpbelly", "suriname_eartheater", "crestfish", "black_and_white_julie", "black_scabbardfish", "uranoscopus_dahlakensis", "queensland_frogfish", "knife_livebearer",
      "umatilla_dace", "naked_back_knifefish", "diamond_tetra", "ragfish", "silver_red_barb", "upeneus_guttatus", "spotted_pimelodus", "socolof's_tetra", "red_stripe_rasbora", "two_spot_pink_bagrid",
      "dragon_goby", "ruby_shark", "beluga_sturgeon", "holland's_piranha", "eeltail_catfish", "red_tailed_goodeid", "xyliphius_kryptos", "four_barred_tigerfish", "pricklefish", "salmon",
      "xingu_corydoras", "chocolate_gourami", "loach_catfish", "fathead_sculpin", "head_and_taillight_tetra", "short_lined_pyrrhulina", "bluefish", "asian_arowana", "red_hump_eartheater", "xenurobrycon_pteropus",
      "dwarf_corydoras", "fire_tail", "pacific_lamprey", "xenotilapia_ochrogenys", "char", "red_spotted_cichlid", "sundaland_noodlefish", "clingfish", "two_spotted_goby", "deep_sea_eel",
      "tinfoil_barb", "anglerfish", "ursinoscorpaenopsis_kitai", "lace_catfish", "jae_barb", "river_stingray", "smalleye_squaretail", "swordfish", "european_perch", "cloudy_doradid",
      "tenuis_tetra", "codlet", "bull_shark", "ghoul", "zebra_loach", "devario", "trimac_cichlid", "golden_pheasant", "barbel_less_catfish", "green_spotted_puffer",
      "wobbegong", "flathead_catfish", "kafue_pike", "black_ruby_barb", "elasmobranch", "treefish", "mrigal", "uropterygius_genie", "red_salmon_rainbowfish", "red_ram",
      "monkeyface_prickleback", "auratus", "california_halibut", "ratfish", "orange_chromide", "parrot_pacu", "flathead", "squarehead_catfish", "ayu", "trewavas_mbuna",
      "red_grouper", "leopold's_angelfish", "cupid_cichlid", "new_zealand_smelt", "jack", "dragonet", "tonguefish", "skilfish", "trahira", "high_backed_tetra",
      "cusk_eel", "spike_tailed_paradise_fish", "pike", "two_banded_cichlid", "yellowfin_grouper", "pirate_perch", "porgy", "union_snook", "bull_trout", "mackerel_shark",
      "sharp_toothed_tetra", "quadratus_taiwanae", "pikeblenny", "marbled_swamp_eel", "northern_pike", "creek_chub", "unicolor_moray", "orange_lined_cichlid", "whiff", "striped_metynnis",
      "red_whalefish", "harlequin_rasboras", "xyrias_guineensis", "chub", "red_pacu", "flagblenny", "magnificient_rasbora", "grenadier", "dwarf_ornate_bagrid", "harlequin_shark",
      "saddleback_hill_stream_loach", "black_mackerel", "rockfish", "pearl_roach", "four_stripe_julie", "uganda_nothobranch", "goblin_shark", "three_spot_earth_eater", "marbled_otocinclus", "black_neon_tetra",
      "gold_line_scissor_tail", "urolophus_papilio", "earthworm_eel", "trunkfish", "flag_tailed_corydoras", "red_tailed_hemiodopsis", "xyrichtys_javanicus", "gurnard", "adonis_pleco", "greenling",
      "mudfish", "blue_danio", "bluegill", "sprat", "julii_corydoras", "cobia", "pearl_cichlid", "xenurobrycon_heterodon", "black_fin_shark", "hussar",
      "flagtail", "lemon_shark", "xenotoca_eiseni", "ungusurculus_komodoensis", "abbott's_moray_eel", "parasitic_catfish", "largemouth_buffalo", "three_spot_gourami", "congo_tetra", "utah_chub",
      "moore's_lamprologus", "paradise_threadfin", "mexican_golden_trout", "red_tailed_rasbora", "cherubfish", "rabbitfish", "nile_puffer", "threadfin", "xyrichtys_rajagopalani", "threespine_stickleback",
      "tadpole_fish", "nurseryfish", "reedfish", "black_winged_hatchetfish", "katangae_nile_bichir", "masu_salmon", "crevice_kelpfish", "giant_pacu", "barb", "blue_eye_trevalla",
      "mottled_stingray", "hatchetfish", "golden_dojo", "montezuma_helleri", "red_fin_shark", "feather_barbel_catfish", "dwarf_croaking_gourami", "xiphophorus_kosszanderi", "virgin_river_chub", "russian_sturgeon",
      "slipmouth", "bluntnose_minnow", "eight_barb_loach", "atlantic_herring", "kuhli_loach_“black”", "bass", "sharpnose_puffer", "cigar_shark", "sierra_leone_barb", "norbert's_dwarf_cichlid",
      "skipjack_tuna", "xiphophorus_kallmani", "uropterygius_makatei", "atlantic_mudskipper", "threadfin_rainbowfish", "south_american_darter", "halibut", "atka_mackerel", "craggy_headed_banjo_catfish", "lake_tebera_rainbowfish",
      "collared_carpetshark", "paraguay_mouthbrooder", "alewife", "lizardfish", "chinook_salmon", "obliquidens_hap", "uranoscopus_bauchotae", "viviparous_blenny", "kissing_fish", "banded_pimelodid",
      "pacific_saury", "crystal_eyed_catfish", "uncinate_sculpin", "ballan_wrasse", "luminous_hake", "altum_angel", "gopher_rockfish", "scissor_tail_rasbora", "uropterygius_wheeleri", "white_piranha",
      "fathead_bichir", "six_bar_lamprologus", "victoria_stonebasher", "regan's_pike_cichlid", "nyassa_blue_cichlid", "vairone", "round_stingray", "humphead", "akure_aphyosemion", "royal_whiptail_farlowella",
      "pencilsmelt", "yellowfin_surgeonfish", "requiem_shark", "green_chromide", "xenobarbus_loveridgei", "hog_sucker", "xenophthalmichthys_danae", "spotfin_tetra", "midshipman_fish", "urophycis_mystacea",
      "barred_loach", "yellowtail_amberjack", "poll's_upside_down_catfish", "cutlassfish", "fairy_cichlid", "red_spotted_pyrrhulina", "undistinguished_sabretooth", "shark", "sea_dragon", "archerfishcommon",
      "green_pufferfish", "sind_danio", "australian_herring", "commerson's_glassfish", "buri", "lemon_tetra", "common_hatchetfish", "porbeagle_shark", "cochliodon_pleco", "zingel",
      "whitetip_reef_shark", "african_whiptail_catfish", "porcupinefish", "upland_bully", "clown_fish", "xenocypris_fangi", "cowfish", "paddlefish", "swampfish", "lesser_bleeding_heart_tetra",
      "yellow_lab", "lenok", "hong_kong_pleco", "rudd", "round_whitefish", "black_lancer", "uroconger_erythraeus", "ukrainian_brook_lamprey", "electric_yellow_hap", "pastel_cichlid",
      "silver_hake", "hampala_barb", "black_adonis_pleco", "serpae_tetra", "rio_meta_pimelodid", "featherfin_synodontis", "xenotilapia_papilio", "salmon_shark", "atlantic_cod", "herring",
      "quoy's_garfish", "ricefish", "sea_bream", "blue_whiting", "luderick", "white_spotted_tropheus", "hagfish", "pompano_dolphinfish", "three_lined_rasbora", "bandfish",
      "quagga_goby", "green_sturgeon", "atlantic_sharpnose_shark", "gulper", "lancetfish", "spinefoot", "orange_finned_loach", "combfish", "bombay_duck", "japanese_eel",
      "stone_loach", "ridgehead", "frogmouth_catfish", "freshwater_eel", "pearly_lamprologus", "usamacinta_buffalo", "filament_tetra", "flying_gurnard", "amur_catfish", "blacktip_reef_shark",
      "wolff's_glassfish", "asian_redtailed_catfish", "silver_needlefish", "usumacinta_cichlid", "blue_triggerfish", "coccina_betta", "janssens'_barb", "peacock_goby", "driftfish", "sandburrower",
      "shad", "california_flyingfish", "giant_tanganyika_cichlid", "rainbowfish", "rosy_danio", "yellowtail_snapper", "ling", "azureus_cichlid", "peppered_corydoras", "pearleye",
      "xenotilapia_leptura", "umpqua_dace", "geryi_piranha", "xyrichtys_koteamea", "quilon_electric_ray", "buffalo_fish", "malay_combtail", "orfe", "black_stripe_dwarf_cichlid", "loweye_catfish",
      "moray_eel", "spotted_thick_lipped_loach", "pictus_catfish", "loach_goby", "slimy_sculpin", "laulao_catfish", "silver_mylossoma", "rainbow_cichlid", "moonfish", "silver_carp",
      "minnow_of_the_deep", "ribbonfish", "mustache_triggerfish", "antarctic_icefish", "australian_prowfish", "eastern_mudminnow", "green_discus", "african_knifefish", "valencian_toothcarp", "dartfish",
      "sand_stargazer", "imposter_trevally", "manta_ray", "yellow_julie", "eel_loach", "xyrichtys_woodi", "burma_danio", "glassfish", "rockling", "dottyback",
      "fire_goby", "colombian_shark", "walu", "seamoth", "australasian_salmon", "unicorn_icefish", "surfperch", "upeneus_mascareinsis", "dwarf_loach", "black_chinned_xenotilapia",
      "gold_dust_molly", "dusky_doradid", "dwarf_rasbora", "beardfish", "upper_grijalva_livebearer", "yellow_king_piranha", "undulated_moray", "kyburz_tetra", "yellow_banded_moenkhausia", "celebes_rainbowfish",
      "eye_lined_pyrrhulina", "rattail", "nkata_cichlid", "rachow's_darter_tetra", "sandbar_shark", "xiphophorus_multilineatus", "louvar", "trevally", "crocodile_shark", "sergeant_major",
      "grouper", "bighead_carp", "algae_eater", "goatfish", "two_rayed_banjo_catfish", "bronze_corydoras", "balzani's_earth_eater", "spiny_basslet", "gamitana", "golden_whiptail",
      "fire_bar_danio", "snapper", "virgin_spinedace", "silver_pacu", "kner's_banjo_catfish", "parnahybae_catfish", "queensland_deepwater_skate", "barbatus_corydorus", "queensland_pygmy_goby", "silver_hemiodopsis",
      "werner's_panchax", "uruguayan_eartheater", "saulosi_mbuna", "tiger_tilapia", "pacific_hake", "australian_pearl_arowana", "bala_shark", "pike_cichlid", "pasionis_cichlid", "waryfish",
      "rusty_frogmouth_catfish", "black_arowana", "jewel_cichlid", "unicorn_crestfish", "meridionalis_gray_bichir", "ethiopian_lungfish", "rough_sculpin", "squarehead_earth_eater", "redlip_blenny", "black_belt_cichlid",
      "catfish", "crucian_carp", "tidewater_goby", "megamouth_shark", "hake", "red_striped_earth_eater", "royal_pleco", "spot_line_peacock_cichlid", "inshore_hagfish", "perch",
      "splash_tetra", "cardinalfish", "macmaster's_dwarf_cichlid", "horse_faced_loach", "goby", "warty_angler", "trout_cod", "chain_loach", "black_triggerfish", "bocaccio",
      "ground_shark", "titan_triggerfish", "banded_climbing_perch", "sea_chub", "pencil_catfish", "johanni_mbuna", "ladder_loach", "uranoscopus_crassiceps", "black_wedge_tetra", "sun_loach",
      "madagascar_rainbowfish", "glittering_pencilfish", "shortnose_gar", "amur_pike", "splitfin", "pigfish", "yellow_eye_mullet", "umbrella_cichlid", "chinese_algae_eater", "escolar",
      "sharksucker", "north_american_darter", "sweeper", "black_tetra", "lake_whitefish", "filefish", "black_shark", "yellow_bass", "underjaw_kingfish", "halfmoon",
      "spanner_barb", "snubnose_eel", "swamp_eel", "menhaden", "dragon_fish", "tubeshoulder", "powder_blue_gourami", "longfin_escolar", "spotted_zamora", "rocket_danio",
      "jellynose_fish", "ornate_bichir", "thread_tail", "steindachners_dwarf_cichlid", "queensland_toadfish", "bullhead_shark", "false_cat_shark", "footballfish", "umbrina_reedi", "yellow_finned_xenotilapia",
      "cockatoo_dwarf_cichlid", "maylandia_aurora", "gold_piranha", "american_flagfish", "graveldiver", "striped_synodontis", "banded_shovelnose_catfish", "bicolor_goat_fish", "yellow_kribensis", "russian_weather_loach",
      "bigscale", "taimen", "cinnamon_loach", "vagabond_butterflyfish", "mola_mola", "longnose_dace", "sockeye_salmon", "empire_gudgeon", "sea_bass", "discusblue",
      "crappie", "man_of_war_fish", "killifish", "pacific_herring", "red_spot_callochromis", "northern_squawfish", "qianlabeo_striatus", "lake_chubsucker", "lanceolate_whiptail_catfish", "flounder",
      "snake_mackerel", "salaween_river_danio", "snake_eel", "anchovy", "pirarucu", "threadfin_bream", "giant_australian_glassfish", "roosterfish", "berney's_shark_catfish", "longfin_smelt",
      "topminnow", "costa_rican_blue_eyed_cichlid", "xiphophorus_signum", "gila_trout", "pingi_logsucker", "spotted_pimelodid", "shortnose_sucker", "xyrichtys_wellingtoni", "king_of_the_salmon", "xyrichtys_pastellus",
      "lamprey", "emperor_tetra", "queensland_kongemakrel", "elongated_lepidiolamprologus", "pink_salmon", "roach", "butterflyfish", "archerfishbanded", "xenocephalus_australiensis", "dwarf_driftwood_catfish",
      "two_spot_rasbora", "emperor_bream", "pinche_piranha", "tiger_tetra", "candy_stripe_goby", "jewel_tetra", "queen_coris", "albacore", "spotted_gar", "angelicus",
      "xyrias_revulsus", "adolfo's_cory"
    ];
    return words;
  }

  // Птицы
  topicBirdsEn()
  {
    let words = 
    [
      "eurasian_wren", "little_bittern", "lapwing", "kittiwake", "short_toed_lark", "tawny_owl", "sharp_shinned_hawk", "little_auk", "african_jacana", "red_knot",
      "scottish_crossbill", "red_legged_partridge", "northern_pygmy_owl", "alpine_chough", "blue_rock_thrush", "greenfinch", "cuckoo", "manx_shearwater", "lesser_spotted_woodpecker", "ring_ouzel",
      "american_three_toed_woodpecker", "lapland_longspur", "brambling", "barn_owl", "royal_albatross", "rough_legged_hawk", "california_condor", "avocet", "pileated_woodpecker", "little_grebe",
      "yellow_browed_warbler", "harpy_eagle", "great_auk", "western_screech_owl", "sandwich_tern", "shag", "red_bellied_woodpecker", "sedge_warbler", "grey_phalarope", "purple_grenadier",
      "chaffinch", "little_wattlebird", "sooty_shearwater", "northern_flicker", "red_naped_sapsucker", "water_pipit", "garden_warbler", "balearic_warbler", "mourning_dove", "goldeneye",
      "house_martin", "eurasian_collared_dove", "nightjar", "bearded_barbet", "eastern_screech_owl", "common_crossbill", "egyptian_vulture", "tufted_duck", "woodcock", "flammulated_owl",
      "gilded_flicker", "razorbill", "corncrake", "grey_wagtail", "iceland_gull", "red_necked_grebe", "horned_grebe", "hoopoe", "long_tailed_jaeger", "purple_heron",
      "nightingale", "pintail", "great_skua", "mediterranean_gull", "reed_bunting", "red_breasted_merganser", "mottled_owl", "swift", "sand_martin", "long_eared_owl",
      "golden_plover", "sandhill_crane", "whimbrel", "pied_flycatcher", "spotted_flycatcher", "balearic_shearwater", "dwarf_cassowary", "oystercatcher", "golden_pheasant", "ladder_backed_woodpecker",
      "cocoi_heron", "bullfinch", "grey_heron", "stock_dove", "linnet", "red_browed_finch", "snipe", "ruddy_turnstone", "lesser_whitethroat", "yellowhead",
      "little_ringed_plover", "tundra_bean_goose", "northern_cardinal", "garganey", "red_tailed_hawk", "common_grackle", "whooper_swan", "kakapo", "common_merganser", "shelduck",
      "cirl_bunting", "pied_crow", "cinereous_vulture", "pectoral_sandpiper", "egyptian_goose", "tree_sparrow", "bohemian_waxwing", "crag_martin", "quail", "wheatear",
      "red_winged_blackbird", "griffon_vulture", "siskin", "redwing", "black_tern", "emu", "common_rosefinch", "dartford_warbler", "red_kite", "gannet",
      "serin", "wigeon", "mandarin_duck", "ringed_plover", "twite", "stygian_owl", "northern_hawk_owl", "great_curassow", "common_scoter", "blackbird",
      "taiga_bean_goose", "great_gray_owl", "velvet_scoter", "scops_owl", "long_tailed_tit", "rock_ptarmigan", "rock_dove", "red_headed_woodpecker", "red_backed_shrike", "common_raven",
      "piping_plover", "snow_goose", "common_gull", "spotted_crake", "chiffchaff", "common_redpoll", "stonechat", "lesser_black_backed_gull", "corn_bunting", "starling",
      "whiskered_screech_owl", "redthroat", "senegal_thick_knee", "bittern", "common_crane", "alpine_swift", "audouin's_gull", "woodlark", "lesser_redpoll", "arctic_tern",
      "woodchat_shrike", "american_robin", "red_cockaded_woodpecker", "black_guillemot", "great_black_backed_gull", "western_yellow_wagtail", "nuthatch", "greenshank", "white_headed_woodpecker", "curlew_sandpiper",
      "wood_warbler", "hobby", "golden_fronted_woodpecker", "common_loon", "barnacle_goose", "short_eared_owl", "golden_eagle", "booted_eagle", "burrowing_owl", "willow_warbler",
      "yellow_bellied_sapsucker", "common_ostrich", "red_billed_chough", "firecrest", "long_tailed_duck", "treecreeper", "red_breasted_sapsucker", "white_cheeked_barbet", "rainbow_lorikeet", "black_grouse",
      "storm_petrel", "downy_woodpecker", "moorhen", "sparrowhawk", "red_crested_pochard", "greylag_goose", "kentish_plover", "crested_tit", "pallid_swift", "grey_plover",
      "crossbill", "dipper", "eider", "oriental_scops_owl", "dunlin", "western_swamphen", "redshank", "spotted_owl", "redstart", "goshawk",
      "meadow_pipit", "mistle_thrush", "great_grey_shrike", "little_stint", "steller's_sea_eagle", "southern_cassowary", "spotted_redshank", "aquatic_warbler", "northern_shoveler", "eleonora's_falcon",
      "pomarine_jaeger", "goldcrest", "woodpigeon", "black_headed_gull", "black_backed_woodpecker", "red_throated_loon", "greater_scaup", "parrot_crossbill", "marsh_warbler", "dunnock",
      "stone_curlew", "skylark", "lineated_woodpecker", "willow_tit", "great_blue_heron", "yellow_wattlebird", "gadwall", "yellow_legged_gull", "red_grouse", "carrion_crow",
      "european_bee_eater", "mute_swan", "arctic_loon", "pochard", "european_honey_buzzard", "jack_snipe", "merlin", "rook", "fulmar", "gila_woodpecker",
      "whinchat", "african_marsh_harrier", "canada_goose", "white_tailed_eagle", "black_tailed_godwit", "parasitic_jaeger", "common_tern", "snowy_owl", "pink_footed_goose", "hen_harrier",
      "buzzard", "brent_goose", "northern_saw_whet_owl", "hawfinch", "herring_gull", "great_tit", "little_egret", "acorn_woodpecker", "fieldfare", "eared_grebe",
      "cattle_egret", "kestrel", "great_crested_grebe", "turtle_dove", "tree_pipit", "marsh_tit", "australian_raven", "osprey", "roseate_tern", "great_egret",
      "spoonbill", "puffin", "pied_wagtail", "peregrine_falcon", "ferruginous_pygmy_owl", "barred_owl", "short_toed_treecreeper", "african_pygmy_falcon", "red_wattlebird", "little_owl",
      "boreal_owl", "red_necked_phalarope", "grasshopper_warbler", "dusky_thrush", "bluethroat", "lady_amherst's_pheasant", "song_thrush", "great_shearwater", "somali_ostrich", "reed_warbler",
      "horned_lark", "glaucous_gull", "eurasian_teal", "whistling_kite", "bald_eagle", "moustached_warbler", "magpie", "common_pheasant", "scaly_breasted_munia", "whitethroat",
      "northern_cassowary", "common_sandpiper", "sardinian_warbler", "blackcap", "arizona_woodpecker", "ivory_billed_woodpecker", "western_marsh_harrier", "crowned_eagle", "ruff", "yellowhammer",
      "bonelli's_eagle", "cormorant", "sanderling", "little_gull", "barn_swallow", "hairy_woodpecker", "greater_flamingo", "curlew", "western_capercaillie", "jackdaw",
      "greater_white_fronted_goose", "western_wattlebird", "hooded_crow", "grey_parrot", "water_rail", "grey_partridge", "jay", "new_holland_honeyeater", "house_sparrow", "smew",
      "kingfisher", "little_tern", "rose_ringed_parakeet", "elf_owl", "coot", "blue_tit", "wood_sandpiper", "green_sandpiper", "great_spotted_woodpecker", "sub_alpine_warbler",
      "black_redstart", "snow_bunting", "golden_oriole", "european_goldfinch", "bearded_tit", "european_green_woodpecker", "house_finch", "purple_martin", "ruddy_duck", "mallard",
      "purple_sandpiper", "dotterel", "regent_honeyeater", "red_flanked_bluetail", "wandering_albatross", "bar_tailed_godwit", "great_horned_owl", "black_crowned_night_heron", "australian_bustard", "european_robin",
      "coal_tit", "rock_pipit", "wryneck"
    ];
    return words;
  }

  // Насекомые
  topicInsectsEn()
  {
    let words = 
    [
      "giant_bark_aphid", "leaf_footed_bug", "western_corsair", "dimorphic_tosale_moth", "western_black_widow", "distinct_quaker", "black_barred_brown", "ground_crab_spider", "pink_spotted_hawkmoth", "flat_backed_millipede_sigmoria",
      "lesser_angle_wing_katydid", "orange_beggar_moth", "western_dusk_singing_cicada", "the_gem", "milkweed_tussock_moth", "northern_paper_wasp", "square_headed_wasp", "cow_killer", "drab_brown_wave_moth", "ceraunus_blue_butterfly",
      "spiny_oakworm_moth", "bark_crab_spiders", "feather_legged_fly", "dragonhunter", "bent_line_carpet_moth", "red_admiral_butterfly", "pink_spotted_dart_moth", "banded_garden_spider", "giant_red_headed_centipede", "four_spotted_mantidfly",
      "click_beetle", "four_spot_sap_beetle", "chinese_mantid", "soldier_beetle", "cottonwood_borer_beetle", "fine_backed_red_paper_wasp", "superb_dog_day_cicada", "vashti_sphinx_moth", "blue_death_feigning_beetle", "two_tailed_swallowtail",
      "northern_walkingstick", "silver_spotted_skipper", "larger_elm_leaf_beetle", "large_rove_beetle", "devil's_coach_horse", "emerald_jumping_spider", "woodland_jumping_spider", "angulose_prominent_moth", "waterlily_leafcutter_moth", "western_tiger_swallowtail",
      "ground_beetle", "mimosa_yellow_sulphur", "posturing_arta_moth", "bald_faced_hornet", "variegated_cutworm_moth", "secondary_screwworm", "indigo_stem_borer", "labyrinthine_orb_weaver_spider", "japygid_dipluran", "macao_paper_wasp",
      "pearly_wood_nymph_moth", "coffinfly", "joro_spider", "flower_fly", "treehopper", "the_badwing", "green_leuconycta", "lupine_blue_butterfly", "orange_meadowhawk", "yellow_fringed_dolichomia",
      "sawfly", "variable_antepione_moth", "strawberry_root_weevil", "crane_flies", "white_peacock_butterfly", "peck's_skipper", "flatid_planthopper", "tulip_tree_silkmoth", "explicit_arches", "stilt_legged_fly",
      "eastern_shieldback_katydid", "orange_tipped_oakworm_moth", "triceratops_beetle", "honey_bee", "streaked_sphinx_moth", "sand_wasp", "horned_passalus_beetle", "lesser_ivory_marked_beetle", "splendid_dagger_moth", "giant_stag_beetle",
      "ichneumon_wasp_trogus", "oldwife_underwing", "miner_bee", "unadorned_carpet_moth", "polyphemus_moth", "shining_leaf_chafer", "giant_ichneumon_wasp", "tropical_buckeye_butterfly", "melonworm_moth", "wandering_brocade_moth",
      "ozark_petrophila_moth", "horace's_duskywing", "iron_clad_beetle", "virginia_ctenucha_moth", "wheel_bug", "yellow_lined_owlet", "bold_jumper", "somber_carpet_moth", "spotted_grass_moth", "bush_katydid",
      "turret_spider", "pitch_twig_moth", "striped_blister_beetle", "selenopid_crab_spider", "discolored_renia_moth", "common_whitetail_skimmer", "curve_toothed_geometer", "jagged_ambush_bug", "western_harvester_ant", "weevil_wasp",
      "mediterranean_seed_bug", "andrew's_snail_eating_beetle", "ichneumon_wasp", "western_wood_cockroach", "eastern_leaf_footed_bug", "earth_boring_scarab_beetle", "fall_armyworm_moth", "little_leaf_notcher", "long_tailed_skipper", "lucerne_moth",
      "texas_brown_tarantula", "malachite_butterfly", "cabbage_looper_moth", "hangingfly", "venerable_dart_moth", "tulip_tree_beauty_moth", "metric_paper_wasp", "wasp_moth", "asian_multicolored_lady_beetle", "american_dog_tick",
      "southwestern_eyed_click_beetle", "decorated_owlet", "dimorphic_jumping_spider", "carolina_locust", "long_jawed_orb_weaver", "american_lappet_moth", "green_and_black_soldier_fly", "southeastern_wandering_spider", "assassin_bug", "columbine_duskywing",
      "european_wool_carder_bee", "warm_chevroned_moth", "fir_tussock_moth", "shagreened_slug_moth", "common_buckeye_butterfly", "white_marked_tussock_moth", "western_tiger_beetle", "luminescent_click_beetle", "carolina_wolf_spider", "jumping_bristletail",
      "rose_hooktip_moth", "red_lined_panopoda", "black_tailed_bee_fly", "grape_plume_moth", "ox_beetle", "southwestern_corn_borer_moth", "two_spotted_forester_moth", "bent_line_dart", "packard's_lichen_moth", "laudable_arches",
      "giant_crab_spider", "bee_killer", "mealybug_destroyer", "parasitic_fly", "pale_metarranthis", "semirelict_underwing", "leafcutter_ants", "american_bird's_wing_moth", "schlaeger's_fruitworm_moth", "gray_ministreak_butterfly",
      "saddleback_caterpillar_moth", "eastern_forktail_damselfly", "american_cockroach", "clover_hayworm_moth", "bolas_spider", "swamp_milkweed_leaf_beetle", "mottled_prominent_moth", "tricolored_bumble_bee", "fishing_spider", "hagen's_sphinx_moth",
      "spotted_lanternfly", "pipe_organ_mud_dauber", "house_cricket", "dun_skipper", "flat_backed_millipede", "scarlet_malachite_beetle", "ferruginous_carpenter_ant", "white_lined_sphinx_moth", "red_pavement_ant", "clemen's_grass_tubeworm_moth",
      "southern_tussock_moth", "little_yellow_sulphur", "rosy_apple_aphid", "garden_webworm_moth", "slaty_skimmer", "banded_tiger_moth", "tufted_globetail_hover_fly", "eastern_yellowjacket", "lotus_hairstreak_butterfly", "boxelder_bug",
      "hickory_tussock_moth", "bee_like_tachinid_fly", "wee_harlequin_bug", "steel_blue_cricket_hunter", "western_sculptured_pine_borer", "spined_assassin_bug", "saw_wing_moth", "slender_crab_spider", "slender_meadow_katydid", "repetitive_tachinid_fly",
      "cicada_killer", "white_margined_burrower_bug", "crested_millipede", "wavy_lined_heterocampa", "margined_burying_beetle", "black_and_white_click_beetle", "common_wood_nymph", "ant_mimic_spider", "eastern_comma", "eastern_red_damsel",
      "confused_woodgrain", "bent_line_gray", "gray_scoopwing_moth", "spotted_beet_webworm_moth", "fire_colored_beetle", "ichneumon_wasps", "black_widow", "velvet_ant", "basswood_leafroller", "black_edged_dichomeris_moth",
      "dinumma_deponens", "northern_black_widow", "soybean_looper", "burying_beetle", "ilia_underwing", "pine_sawyer_beetle", "black_onion_fly", "cream_bordered_dichomeris", "nysa_roadside_skipper", "snakefly",
      "grasshopper_nymphs", "woolly_gray_moth", "spring_azure", "house_fly", "marine_blue_butterfly", "the_beggar", "two_striped_grasshopper", "western_subterranean_termite", "mosaic_darner_dragonfly", "dart_moth",
      "round_headed_apple_tree_borer", "scoliid_wasp", "southern_devil_scorpion", "harlequin_bug", "laurel_sphinx", "green_arches", "sowbug", "banded_net_winged_beetle", "cross_lined_wave", "banded_hairstreak",
      "robber_fly", "band_winged_hoverfly", "transverse_flower_fly", "large_necklace_moth", "tersa_sphinx_moth", "juniper_hairstreak_butterfly", "european_hornet", "widow_skimmer", "southern_emerald_moth", "carpet_moth",
      "mutillid_wasp", "ichneumon_wasp_mesostenus", "great_tiger_moth", "strawberry_crown_moth", "wood_leopard_moth", "coral_hairstreak_butterfly", "marsh_fly", "long_legged_sac_spider", "mottled_grass_veneer_moth", "winter_stonefly",
      "salt_marsh_moth", "mini_bagworm", "unicorn_caterpillar_moth", "parthenice_tiger_moth", "millipede", "shadow_darner", "pale_winged_midget_moth", "packard's_wave_moth", "nevada_buck_moth", "spangled_flower_beetle",
      "banded_black_carpet_beetle", "black_soldier_fly", "hag_moth", "elm_sphinx", "common_oak_moth", "lyside_sulphur_butterfly", "metallic_wood_boring_beetle", "long_jointed_beetle", "hera_buck_moth", "small_bird_dropping_moth",
      "cedar_beetle", "four_spotted_gluphisia_moth", "northern_white_skipper", "checkered_white", "long_bodied_cellar_spider", "walker's_epinotia_moth", "toad_bug", "roseate_skimmer_dragonfly", "zebra_conchylodes_moth", "indianmeal_moth",
      "black_dotted_glyph", "small_necklace_moth", "giant_whipscorpion", "two_spotted_longhorn_bee", "pebble_bee", "definite_tussock_moth", "bold_feathered_grass_moth", "jewel_weevil", "dot_lined_white", "red_humped_caterpillar_moth",
      "cross_orbweaver", "false_crocus_geometer", "square_legged_camel_cricket", "inornate_pyrausta_moth", "yellow_haired_dagger_moth", "grousewinged_backswimmer", "bicolored_pyrausta", "sharp_angled_carpet_moth", "meadow_spittlebug", "zebra_longwing",
      "elder_shoot_borer", "rainbow_scarab_beetle", "the_scribbler", "oak_leafroller", "leaf_miner_fly", "scissor_grinder_cicada", "bee_fly", "black_horned_gem_fly", "toothed_phigalia_moth", "twig_pruner_beetle",
      "wild_forget_me_not_moth", "galium_sphinx_moth", "joined_underwing_moth", "black_and_yellow_mud_dauber", "flesh_fly", "western_carpenter_bee", "emerald_euphoria_beetle", "pearl_crescent_butterfly", "horse_fly", "sphinx_moth",
      "northern_house_mosquito", "marsh_beetle", "horse_lubber_grasshopper", "spotted_cucumber_beetle", "american_bumble_bee", "wolf_spider", "nut_and_acorn_weevil", "grapevine_epimenis_moth", "the_laugher_moth", "reddish_potato_beetle",
      "manto_tussock_moth", "harlequin_flower_beetle", "virginia_flower_fly", "turkestan_cockroach", "robber_fly_atomosia", "reckless_jumper", "magdalen_underwing_moth", "ironweed_root_moth", "silverfish", "oblique_heterocampa_moth",
      "spotted_tussock_moth", "ambiguous_moth", "black_waved_flannel_moth", "henry's_elfin_butterfly", "confused_eusarca", "double_striped_scoparia_moth", "virginia_creeper_sphinx", "the_penitent_moth", "yellow_collared_slug_moth", "margined_leatherwing_beetle",
      "showy_emerald_moth", "bagworm_moth", "american_lady_butterfly", "black_banded_owlet_moth", "formica_ant", "black_blow_fly", "eyed_baileya", "rustic_sphinx_moth", "bark_crab_spider", "harvestman",
      "sugar_maple_borer", "slug_caterpillar_moths", "painted_grasshopper", "colorado_soldier_beetle", "proturan", "large_milkweed_bug", "white_blotched_heterocampa", "banded_alder_borer_beetle", "four_barred_gray_moth", "red_headed_inchworm_moth",
      "noble_scoliid_wasp", "margined_white", "granite_moth", "european_skipper", "edwards_glassy_wing", "eastern_eyed_click_beetle", "bordered_patch_butterfly", "holly_borer_moth", "tan_jumping_spider", "common_sootywing_skipper",
      "satin_moth", "western_conifer_seed_bug", "leafroller_moth", "fiery_skipper", "african_fig_fly", "spined_micrathena_spider", "eyed_paectes_moth", "meal_moth", "braconid_wasp", "common_checkered_skipper",
      "ground_spider", "bristly_cutworm_moth", "common_ringlet_butterfly", "vinegar_fly", "lattice_orbweaver_spider", "archips_leafroller", "orange_sulphur", "flowing_line_hypena_moth", "versute_sharpshooter", "great_basin_bumble_bee",
      "fifteen_spotted_lady_beetle", "bordered_plant_bug", "greenhouse_millipede", "five_spotted_hawk_moth", "eyed_brown_butterfly", "retarded_dagger_moth", "eastern_pondhawk", "brown_panopoda_moth", "poplar_borer_beetle", "burrower_mayfly",
      "cassius_blue_butterfly", "morning_glory_plume_moth", "silver_garden_spider", "skiff_moth", "barn_funnel_weaver_spider", "house_spider", "yellow_velvet_ant", "rhinoceros_beetle", "arrow_shaped_micrathena_spider", "banded_olethreutes",
      "sweat_bee", "northeastern_pine_sawyer", "three_lined_potato_beetle", "thread_waisted_wasp", "coppery_leafhopper", "knapweed_root_weevil", "gold_backed_snipe_fly", "bark_centidpede", "abbreviated_button_slug_moth", "abbott's_sphinx_moth",
      "predatory_stink_bug", "pink_underwing_moth", "northern_giant_flag_moth", "conifer_sawfly", "signate_melanolophia", "net_winged_beetle", "hornet_mimic_hover_fly", "green_june_beetle", "soybean_nodule_fly", "yellow_spotted_webworm_moth",
      "forktail_damselflies", "yellow_necked_caterpillar_moth", "stinkbug", "cork_lid_trapdoor_spider", "tuft_legged_orbweaver", "friendly_probole_moth", "running_crab_spider", "pipevine_swallowtail", "pistachio_emerald_moth", "long_horned_slug_moth",
      "arrowhead_orb_weaver", "leafcutter_bee_megachile", "wavy_lined_emerald_moth", "peacock_fly", "giant_ichneumon_wasp_norton's", "black_ground_bug", "northern_pearly_eye", "common_green_darner", "black_carpenter_ant", "peachtree_borer_moth",
      "japanese_beetle", "soft_winged_flower_beetle", "gray_petaltail_dragonfly", "pustulated_carrion_beetle", "gray_edged_hypena", "reticulated_net_winged_beetle", "huntsman_spider", "peppered_jumper", "spur_throated_grasshopper", "notched_mouth_ground_beetle",
      "snowy_urola", "monkey_beetle", "wandering_spider", "asimina_webworm_moth", "two_lined_spittlebug", "rough_stink_bug", "sculptured_pine_borer_beetle", "asian_carpet_beetle", "common_meadow_katydid", "pine_false_looper_zale_moth",
      "eastern_tailed_blue_butterfly", "brown_shaded_gray", "lesser_meadow_katydid", "cuckoo_wasp", "dot_tailed_whiteface_dragonfly", "one_spotted_tiger_beetle", "lindsey's_skipper", "common_sanddragon", "greater_oak_dagger", "blinded_sphinx_moth",
      "green_crab_spider", "oak_besma", "walnut_sphinx_moth", "checkered_beetle", "arctic_blue_butterfly", "southern_nepytia_moth", "american_hover_fly", "eyed_dysodia_moth", "black_and_yellow_garden_spider", "salt_and_pepper_looper_moth",
      "mite", "flat_bug", "saddled_yellowhorn", "phaon_crescent_butterfly", "cryptopid_centipede", "northern_scorpion", "ant", "southern_flannel_moth", "hyperparasitic_wasp", "water_strider",
      "maritime_earwig", "grizzled_mantid", "orange_wing_moth", "feather_legged_spider", "lance_tipped_darner", "northern_apple_sphinx", "southern_house_spider", "modest_sphinx_moth", "scarlet_winged_lichen_moth", "fungus_weevil",
      "dark_marathyssa", "calligrapha_beetle", "white_flannel_moth", "baltimore_checkerspot", "red_milkweed_beetle", "ponderous_borer_beetle", "sorghum_webworm_moth", "ceanothus_silkmoth", "western_eyed_click_beetle", "common_eastern_bumble_bee",
      "robber_fly_diogmites", "orange_skipperling", "field_cricket", "the_joker", "whitebanded_crab_spider", "yellow_fly", "red_flat_bark_beetle", "red_bordered_emerald", "northern_oak_hairstreak", "chosen_sallow",
      "spotted_winged_antlion", "maple_looper_moth", "beetle_grub", "bean_leaf_beetle", "labyrinth_moth", "alfalfa_looper_moth", "mottled_tortoise_beetle", "ailanthus_webworm_moth", "soldier_fly", "flatheaded_hardwood_borer",
      "false_chinch_bug", "azure_bluet", "convergent_lady_beetle", "bethune's_pinion_moth", "mound_ant", "white_slant_line_moth", "four_spurred_assassin_bug", "buffalo_treehopper", "mischievous_bird_grasshopper", "cottonwood_leaf_beetle",
      "nevada_tiger_moth", "eastern_tent_caterpillar_moth", "tengellid_spider", "statira_sulphur_butterfly", "asian_giant_hornet", "smooth_banded_sister_butterfly", "delta_flower_scarab_beetle", "beautiful_wood_nymph", "long_horned_bee", "goldcap_moss_eater_moth",
      "folding_door_spider", "snow_fleas", "wedge_shaped_beetle", "weidemeyer's_admiral_butterfly", "stag_beetle", "red_cross_shield_bug", "comb_clawed_spider", "emerald_moth", "canadian_sphinx", "common_sawfly",
      "seven_spotted_lady_beetle", "red_groundling_moth", "carrot_seed_moth", "signate_lady_beetle", "cabbage_white_butterfly", "filmy_dome_spider", "little_white_lichen_moth", "juba_skipper", "shield_backed_bug_homaemus", "oleander_hawk_moth",
      "rice_weevil", "regal_moth", "scale_insects", "mint_loving_pyrausta_moth", "antlion", "tarnished_plant_bug", "fervid_plagodis", "bed_bug", "burdock_borer_moth", "rosy_maple_moth",
      "fall_webworm", "black_and_yellow_lichen_moth", "thin_lined_owlet_moth", "orange_patched_smoky_moth", "blister_beetle", "cloudless_sulphur_butterfly", "white_m_hairstreak_butterfly", "common_lytrosis_moth", "sachem_skipper", "reddish_speckled_dart_moth",
      "hubbard's_small_silkmoth", "ghost_moth", "red_ant_mimic_spider", "pigeon_tremex", "hydriomena_moth", "blue_eyed_darner", "yellow_jacket", "celypha_moth", "yellow_wave_moth", "tubeworm_moth",
      "four_spotted_pennant", "stink_bug", "eggplant_flea_beetle", "four_spotted_velvet_ant", "clay_colored_billbug", "black_caterpillar_hunter", "io_moth", "american_rubyspot_damselfly", "white_footed_ant", "pale_winged_crocidophora_moth",
      "nessus_sphinx_moth", "orange_virbia_moth", "melissa_blue_butterfly", "gray_bird_grasshopper", "black_swallowtail", "sooty_longwing_katydid", "march_brown_mayfly", "orange_assassin_bug", "chickweed_geometer", "hairy_panther_ant",
      "common_green_bottle_fly", "confused_haploa_moth", "small_phigalia_moth", "flower_longhorn_beetle", "karner_blue_butterfly", "common_paper_wasp", "delphacid_planthopper", "snow_mosquito", "common_roadside_skipper", "mormon_cricket",
      "putnam_jumping_spider", "variable_tropic", "ambush_bug", "spotted_tree_borer_beetle", "sacken's_velvet_ant", "spotted_peppergrass_moth", "backswimmer", "crocus_geometer", "red_spotted_ant_mimic_spider", "true_katydid",
      "midge", "squash_vine_borer_moth", "gold_and_brown_rove_beetle", "rock_bristletail", "reakirt's_blue_butterfly", "garman's_quaker", "fragile_forktail", "seepage_dancer", "the_half_wing", "mesquite_bug",
      "small_milkweed_bug", "root_maggot_fly", "cicada", "large_lace_border_moth", "european_earwig", "common_spragueia", "blue_fronted_dancer", "thread_legged_assassin_bug", "water_scavenger_beetle", "plant_bug",
      "twin_spotted_sphinx_moth", "redbud_leafroller", "fig_sphinx", "american_copper", "northern_crescent_butterfly", "giant_swallowtail_butterfly", "black_firefly", "weevil", "pondweed_moth", "ornate_checkered_beetle",
      "yellow_slant_line_moth", "mosquito", "double_banded_scoliid_wasp", "painted_lichen_moth", "flower_moth", "cat_faced_spider", "ten_lined_june_beetle", "hemina_pinion_moth", "black_carpet_beetle", "deer_fly",
      "large_tolype_moth", "whirligigs", "achemon_sphinx_moth", "promethea_moth", "phyllira_tiger_moth", "light_marathyssa_moth", "scalloped_sack_bearer_moth", "orb_weaver", "splendid_earth_boring_beetle", "nais_tiger_moth",
      "bidens_borer_moth", "saddled_prominent_moth", "big_dipper_firefly", "sooty_crane_fly", "buck_moth", "vivid_metallic_ground_beetle", "trashline_orbweaver", "glorious_scarab_beetle", "unspotted_looper_moth", "black_horse_fly",
      "familiar_bluet", "marbled_orb_weaver", "broad_headed_sharpshooter", "tawny_mole_cricket", "speckled_sharpshooter", "hermit_flower_beetle", "candy_striped_leafhopper", "xanthostege_roseiterminalis", "appalachian_brown_butterfly", "tortricid_moth",
      "stinging_rose_caterpillar_moth", "larder_beetle", "picture_winged_fly", "linden_borer_beetle", "elephant_hawk_moth", "differential_grasshopper", "two_spotted_grass_bug", "six_spotted_neolema", "predaceous_diving_beetle", "false_bombardier_beetle",
      "arched_hooktip", "iron_cross_blister_beetle", "moonseed_moth", "pyrausta_moth", "owlet_moth", "tufted_thyatirin", "barberry_geometer_moth", "big_headed_ground_beetle", "syrphid_fly", "double_striped_bluet",
      "master's_dart_moth", "nais_metalmark_butterfly", "red_saddlebags", "splendid_palpita", "elm_seed_bug", "shiny_flea_beetle", "bristly_millipede", "periphoba_arcaei_moth", "carolina_leaf_roller_cricket", "acorn_weevil",
      "evergreen_bagworm_moth", "goldenrod_crab_spider", "pale_green_weevil", "western_white_butterfly", "rainbow_darkling_beetle"
    ];
    return words
  }

  // Mлекопитающие
  topicMammalsEn()
  {
    let words = 
    [
      "giant_armadillo", "malayan_tapir", "fallow_deer", "swamp_rabbit", "gerenuk", "raccoon", "culpeo", "waterbuck", "sable", "black_spider_monkey",
      "coypu", "reticulated_giraffe", "white_tailed_deer", "cape_buffalo", "chinese_water_deer", "cotton_top_tamarin", "maned_wolf", "hoary_marmot", "african_leopard", "spotted_hyena",
      "sumatran_rhinoceros", "gelada", "american_bison", "golden_jackal", "malayan_tiger", "borneo_elephant", "risso's_dolphin", "giant_pangolin", "european_bison", "deer_mouse",
      "emperor_tamarin", "bornean_orangutan", "hartebeest", "snowshoe_hare", "long_tailed_chinchilla", "california_sea_lion", "common_dolphin", "asian_elephant", "southern_tamandua", "masai_giraffe",
      "red_ruffed_lemur", "brown_hyena", "hawaiian_monk_seal", "snow_monkey", "himalayan_tahr", "transvaal_lion", "grey_headed_flying_fox", "hog_badger", "arctic_ground_squirrel", "ringed_seal",
      "red_kangaroo", "bushpig", "red_wolf", "pygmy_hippopotamus", "ethiopian_wolf", "golden_snub_nosed_monkey", "striped_hyena", "pink_fairy_armadillo", "white_rhinoceros", "african_civet",
      "kangaroo_rat", "aardwolf", "pygmy_marmoset", "kinkajou", "hoary_bat", "black_rhinoceros", "virginia_opossum", "jaguarundi", "spotted_bat", "sea_otter",
      "golden_mouse", "asiatic_lion", "dall_sheep", "barbary_sheep", "mouflon", "sika_deer", "mediterranean_monk_seal", "okapi", "eastern_chipmunk", "amur_leopard",
      "indri", "minke_whale", "hooded_seal", "arctic_wolf", "clouded_leopard", "eurasian_otter", "sand_cat", "silver_haired_bat", "european_rabbit", "american_mink",
      "leopard_seal", "bottlenose_dolphin", "north_american_river_otter", "southern_flying_squirrel", "pygmy_killer_whale", "golden_lion_tamarin", "eastern_gorilla", "corsac_fox", "northern_flying_squirrel", "lion_tailed_macaque",
      "sumatran_elephant", "honduran_white_bat", "desert_cottontail", "alpine_chipmunk", "japanese_dwarf_flying_squirrel", "eurasian_wolf", "mountain_zebra", "kit_fox", "star_nosed_mole", "pallid_bat",
      "amazon_river_dolphin", "ribbon_seal", "barbary_macaque", "canada_lynx", "ratel", "vervet_monkey", "binturong", "hamadryas_baboon", "long_tailed_weasel", "spectacled_bear",
      "bush_dog", "western_lowland_gorilla", "brown_antechinus", "ring_tailed_lemur", "red_lechwe", "saiga_antelope", "european_polecat", "white_cheeked_gibbon", "cacomistle", "large_flying_fox",
      "nine_banded_armadillo", "european_hedgehog", "eastern_wolf", "bowhead_whale", "african_wild_ass", "honey_badger", "asian_black_bear", "black_tailed_prairie_dog", "blue_monkey", "pronghorn",
      "arctic_fox", "eastern_red_bat", "african_forest_elephant", "stoat", "nubian_ibex", "plains_zebra", "pilot_whale", "pacific_white_sided_dolphin", "beluga_whale", "roe_deer",
      "west_indian_manatee", "sumatran_tiger", "american_black_bear", "indochinese_tiger", "north_american_porcupine", "tibetan_sand_fox", "eastern_gray_squirrel", "indian_wolf", "giant_otter", "pygmy_slow_loris",
      "american_pika", "rock_squirrel", "european_badger", "asian_palm_civet", "meerkat", "indian_giant_squirrel", "black_footed_ferret", "bat_eared_fox", "south_china_tiger", "short_tailed_chinchilla",
      "golden_mantled_ground_squirrel", "dhole", "fox_squirrel", "javan_rhinoceros", "mountain_gorilla", "white_handed_gibbon", "gray_whale", "bald_uakari", "black_backed_jackal", "vaquita",
      "arctic_hare", "margay", "north_atlantic_right_whale", "kodkod", "jungle_cat", "persian_leopard", "walrus", "caribbean_monk_seal", "alpine_marmot", "fennec_fox",
      "prairie_vole", "big_brown_bat", "wood_bison", "african_bush_elephant", "harbor_seal", "siberian_tiger", "short_eared_dog", "springhare", "capybara", "feral_pig",
      "philippine_tarsier"
    ];
    return words;
  }

  // Рептилии
  topicReptilesEn()
  {
    let words = 
    [
      "satanic_leaf_tailed_gecko", "red_tegu", "mojave_rattlesnake", "ornate_box_turtle", "black_caiman", "emerald_tree_boa", "brown_anole", "veiled_chameleon", "rhino_iguana", "gold_tegu",
      "burmese_python", "spotted_python", "kemp's_ridley_sea_turtle", "pancake_tortoise", "gharial", "broadhead_skink", "radiated_tortoise", "parson's_chameleon", "thorny_devil", "green_basilisk",
      "green_anaconda", "aldabra_giant_tortoise", "florida_softshell_turtle", "gopher_tortoise", "panther_chameleon", "african_rock_python", "rhampholeon_brevicaudatus", "tokay_gecko", "desert_iguana", "fire_skink",
      "yellow_bellied_sea_snake", "gaboon_viper", "timber_rattlesnake", "false_water_cobra", "saltwater_crocodile", "red_eared_slider_turtle", "spiny_softshell_turtle", "eastern_hognose_snake", "nile_monitor", "eyelash_viper",
      "rinkhals", "prairie_rattlesnake", "black_racer_snake", "crested_gecko", "southeastern_five_lined_skink", "blue_tongued_skink", "diamondback_water_snake", "tentacled_snake", "painted_turtle", "cumberland_slider",
      "dwarf_caiman", "green_anole", "eastern_glass_lizard", "egyptian_cobra", "banded_water_snake", "asian_water_monitor", "speckled_king_snake", "green_sea_turtle", "pine_snake", "galapagos_tortoise",
      "eastern_mud_turtle", "house_gecko", "stinkpot_turtle", "egyptian_tortoise", "gargoyle_gecko", "american_crocodile", "ringneck_snake", "western_pond_turtle", "armadillo_girdled_lizard", "desert_tortoise",
      "argentine_black_and_white_tegu", "green_iguana", "yellow_bellied_slider", "eastern_box_turtle", "olive_ridley_sea_turtle", "blue_tailed_skink", "american_alligator", "common_leopard_gecko", "gila_monster", "leopard_tortoise",
      "african_fat_tailed_gecko", "lace_monitor", "loggerhead_sea_turtle", "common_snapping_turtle", "african_spurred_tortoise", "nile_crocodile", "spotted_turtle", "red_footed_tortoise", "blue_racer_snake", "leatherback_turtle",
      "hawksbill_sea_turtle", "hermann's_tortoise", "savannah_monitor", "wood_turtle", "diamondback_terrapin", "queen_snake", "marine_iguana", "eastern_massasauga_rattlesnake", "crocodile_skink", "bull_snake"
    ];
    return words;
  }

  // Амфибии
  topicAmphibiansEn()
  {
    let words = 
    [
      "marbled_salamander", "eastern_newt", "golden_toad", "green_tree_frog", "gray_tree_frog", "blue_poison_dart_frog", "common_frog", "japanese_giant_salamander", "pool_frog", "olm",
      "smooth_newt", "common_toad", "black_salamander", "tiger_salamander", "american_bullfrog", "cuban_tree_frog", "cane_toad", "corroboree_frog", "spring_peepers", "jefferson_salamander",
      "pickerel_frog", "great_crested_newt", "american_toad", "spotted_salamander", "rough_skinned_newt", "palmate_newt", "northern_leopard_frog", "pacific_tree_frog", "blue_spotted_salamander", "wood_frog",
      "red_eyed_tree_frog", "southern_leopard_frogs", "hellbender", "strawberry_poison_dart_frog", "green_frog", "african_clawed_frog", "california_tiger_salamander", "natterjack_toad"
    ];
    return words;
  }

  // Беспозвоночные
  topicInvertebratesEn()
  {
    let words = 
    [
      "red_admiral", "mountain_pine_beetle", "bamboo_shrimp", "colorado_potato_beetle", "red_velvet_ant", "asian_long_horned_beetle", "firefly_squid", "red_claw_crab", "boxelder_bug", "ghost_ant",
      "american_copper_butterfly", "rosy_maple_moth", "giant_leopard_moth", "mourning_cloak", "borer", "pomacea_canaliculata", "blue_morpho_butterfly", "lion's_mane_jellyfish", "eastern_tiger_swallowtail", "zebra_swallowtail_butterfly",
      "spicebush_swallowtail", "cabbage_white_butterfly", "deathstalker_scorpion", "blue_ringed_octopus", "cherry_shrimp", "coconut_octopus", "corbicula_fluminea", "zebra_spider", "pipevine_swallowtail", "chilean_recluse_spider",
      "atlas_moth", "peppered_moth", "lymnaea_stagnalis", "asian_lady_beetle", "elephant_hawk_moth", "crystal_red_shrimp", "bulldog_ant", "flapjack_octopus", "procambarus_clarkii", "bagworms",
      "procambarus_alleni", "hummingbird_hawk_moth", "emerald_crab", "crown_of_thorns_starfish", "melanoides_tuberculata", "ghost_crab", "black_swallowtail", "amano_shrimp", "neritina_natalensis", "red_rock_crab",
      "dumbo_octopus", "giant_pacific_octopus", "polyphemus_moth"
    ];
    return words;
  }

  // Животные
  topicAnimalsEn()
  {
    let tmpAr = [];
    tmpAr[0] = this.topicFishsEn();
    tmpAr[1] = this.topicBirdsEn();
    tmpAr[2] = this.topicInsectsEn();
    tmpAr[3] = this.topicMammalsEn();
    tmpAr[4] = this.topicReptilesEn();
    tmpAr[5] = this.topicAmphibiansEn();
    tmpAr[6] = this.topicInvertebratesEn();
    tmpAr[7] = this.topicDinosaursEn();

    let words = [];

    for (let i = 0; i < tmpAr.length; i++)
      for (let j = 0; j < tmpAr[i].length; j++)
        words.push(tmpAr[i][j]);

    return shuffle(words);
  }

  // Динозавры
  topicDinosaursEn()
  {
    let words = 
    [
      "rahiolisaurus", "tastavinsaurus", "stegoceras", "coronosaurus", "xuanhanosaurus", "tianyulong", "rinchenia", "titanosaurus", "ornithopsis", "plateosaurus",
      "struthiomimus", "australovenator", "lapparentosaurus", "planicoxa", "szechuanosaurus", "changyuraptor", "haplocheirus", "eocarcharia", "rhabdodon", "haya",
      "oxalaia", "thecodontosaurus", "zephyrosaurus", "ingenia", "equijubus", "shaochilong", "troodon", "sarahsaurus", "silvisaurus", "venenosaurus",
      "scansoriopteryx", "prenoceratops", "lexovisaurus", "juravenator", "mamenchisaurus", "zhuchengtyrannus", "antarctosaurus", "melanorosaurus", "pachyrhinosaurus", "zupaysaurus",
      "gigantoraptor", "serendipaceratops", "sinosaurus", "xiongguanlong", "camelotia", "cumnoria", "regnosaurus", "tanycolagreus", "aeolosaurus", "nemegtosaurus",
      "sinoceratops", "cetiosauriscus", "stenopelix", "huaxiagnathus", "alamosaurus", "anserimimus", "carnotaurus", "yaverlandia", "allosaurus", "adeopapposaurus",
      "erlikosaurus", "regaliceratops", "protohadros", "wellnhoferia", "names", "sigilmassasaurus", "teratophoneus", "shenzhousaurus", "pararhabdodon", "nebulasaurus",
      "mantellodon", "sinusonasus", "kol", "erketu", "wintonotitan", "mercuriceratops", "dimetrodon", "spinostropheus", "anatotitan", "hagryphus",
      "iguanacolossus", "crichtonsaurus", "pneumatoraptor", "kerberosaurus", "raptorex", "omeisaurus", "riojasaurus", "tangvayosaurus", "tenontosaurus", "bahariasaurus",
      "manidens", "barosaurus", "sphaerotholus", "sinornithosaurus", "adasaurus", "shantungosaurus", "bellusaurus", "archaeopteryx", "elrhazosaurus", "sinosauropteryx",
      "theiophytalia", "saturnalia", "lourinhanosaurus", "delapparentia", "rahonavis", "acanthopholis", "diamantinasaurus", "albertosaurus", "wuerhosaurus", "procompsognathus",
      "sellosaurus", "sonorasaurus", "aquilops", "dahalokely", "europasaurus", "qiupalong", "saltasaurus", "prenocephale", "magyarosaurus", "xuanhuaceratops",
      "ostafrikasaurus", "taohelong", "vahiny", "tsaagan", "tarbosaurus", "argyrosaurus", "eoraptor", "eocursor", "atrociraptor", "thescelosaurus",
      "diceratops", "metriacanthosaurus", "graciliraptor", "chialingosaurus", "styracosaurus", "daspletosaurus", "kosmoceratops", "spinosaurus", "kundurosaurus", "lythronax",
      "unaysaurus", "alioramus", "abelisaurus", "aristosuchus", "kinnareemimus", "anabisetia", "thecocoelurus", "avaceratops", "monolophosaurus", "huehuecanauhtlus",
      "eotriceratops", "eobrontosaurus", "gigantspinosaurus", "astrodon", "gryphoceratops", "paranthodon", "gargoyleosaurus", "lanzhousaurus", "kukufeldia", "bothriospondylus",
      "majungasaurus", "trinisaura", "chungkingosaurus", "mochlodon", "arrhinoceratops", "coahuilaceratops", "spinophorosaurus", "velocisaurus", "kileskus", "rebbachisaurus",
      "irritator", "magnosaurus", "protoceratops", "genyodectes", "qiaowanlong", "leaellynasaura", "avimimus", "bistahieversor", "barsboldia", "anchisaurus",
      "segisaurus", "tianyuraptor", "chubutisaurus", "gallimimus", "phuwiangosaurus", "becklespinax", "wendiceratops", "kaijiangosaurus", "talarurus", "conchoraptor",
      "lagosuchus", "prosaurolophus", "kotasaurus", "unenlagia", "xixianykus", "suzhousaurus", "lesothosaurus", "lurdusaurus", "unescoceratops", "patagosaurus",
      "qantassaurus", "draconyx", "brachiosaurus", "indosuchus", "overosaurus", "segnosaurus", "sinotyrannus", "tazoudasaurus", "aegyptosaurus", "vulcanodon",
      "pedopenna", "yunnanosaurus", "ornithomimus", "uberabatitan", "gideonmantellia", "urbacodon", "richardoestesia", "gobiceratops", "sinornithomimus", "nasutoceratops",
      "dacentrurus", "megalosaurus", "valdosaurus", "aublysodon", "alaskacephale", "gasparinisaura", "aardonyx", "tachiraptor", "miragaia", "zhongyuansaurus",
      "condorraptor", "agilisaurus", "animantarx", "lambeosaurus", "microraptor", "othnielosaurus", "siamodon", "skorpiovenator", "masiakasaurus", "micropachycephalosaurus",
      "yimenosaurus", "liliensternus", "euhelopus", "rhoetosaurus", "tyrannotitan", "yangchuanosaurus", "tatankaceratops", "homalocephale", "psittacosaurus", "philovenator",
      "ajkaceratops", "rapator", "triceratops", "seitaad", "leyesaurus", "edmontosaurus", "ojoceratops", "tarchia", "andesaurus", "yinlong",
      "oohkotokia", "einiosaurus", "herrerasaurus", "lophorhothon", "sinovenator", "australodocus", "pisanosaurus", "liaoningosaurus", "antetonitrus", "yandusaurus",
      "dreadnoughtus", "angolatitan", "amazonsaurus", "spinops", "neuquenraptor", "erliansaurus", "tawa", "concavenator", "suuwassea", "ornitholestes",
      "siats", "saichania", "tataouinea", "tuojiangosaurus", "yueosaurus", "kryptops", "arcovenator", "haplocanthosaurus", "torvosaurus", "marshosaurus",
      "panamericansaurus", "sauropelta", "xiaotingia", "atlascopcosaurus", "ferganasaurus", "edmarka", "hypsilophodon", "rugops", "futalognkosaurus", "beipiaosaurus",
      "sahaliyania", "juratyrant", "utahraptor", "neuquensaurus", "turanoceratops", "mei", "titanoceratops", "poekilopleuron", "vagaceratops", "altirhinus",
      "gilmoreosaurus", "achillobator", "telmatosaurus", "eotyrannus", "saltopus", "podokesaurus", "abrosaurus", "utahceratops", "jinzhousaurus", "similicaudipteryx",
      "nanshiungosaurus", "carcharodontosaurus", "gondwanatitan", "dubreuillosaurus", "ekrixinatosaurus", "magnapaulia", "nipponosaurus", "lusotitan", "xenotarsosaurus", "tylocephale",
      "albertaceratops", "gryponyx", "dyoplosaurus", "apatosaurus", "dracorex", "albertadromeus", "aralosaurus", "scelidosaurus", "saurornithoides", "yamaceratops",
      "sarcosaurus", "saurornitholestes", "hypselospinus", "monoclonius", "sauroposeidon", "gasosaurus", "albertonykus", "wulagasaurus", "caudipteryx", "hungarosaurus",
      "dracopelta", "centrosaurus", "archaeornithomimus", "maxakalisaurus", "zuniceratops", "struthiosaurus", "sauroniops", "aviatyrannis", "borogovia", "dicraeosaurus",
      "pamparaptor", "ceratosaurus", "limusaurus", "veterupristisaurus", "mendozasaurus", "ichthyovenator", "archaeoceratops", "velafrons", "epidendrosaurus", "eustreptospondylus",
      "texacephale", "montanoceratops", "qianzhousaurus", "palaeoscincus", "coelophysis", "linhenykus", "brachylophosaurus", "kazaklambia", "aletopelta", "jobaria",
      "shuvuuia", "austrosaurus", "orodromeus", "puertasaurus", "velociraptor", "jaxartosaurus", "loricatosaurus", "ankylosaurus", "cryptovolans", "erectopus",
      "yixianosaurus", "tyrannosaurus_rex", "zalmoxes", "demandasaurus", "ignavusaurus", "iguanodon", "xiaosaurus", "santanaraptor", "proceratosaurus", "shuvosaurus",
      "pentaceratops", "probactrosaurus", "chasmosaurus", "polacanthus", "angulomastacator", "anodontosaurus", "opisthocoelicaudia", "tornieria", "hexinlusaurus", "deinonychus",
      "tianzhenosaurus", "cryolophosaurus", "stygimoloch", "xinjiangtitan", "malawisaurus", "deltadromeus", "fabrosaurus", "supersaurus", "zanabazar", "nanyangosaurus",
      "rhinorex", "staurikosaurus", "jianchangosaurus", "bagaraatan", "xuwulong", "nyasasaurus", "compsognathus", "megapnosaurus", "bagaceratops", "quilmesaurus",
      "edmontonia", "elmisaurus", "huabeisaurus", "dilophosaurus", "gobisaurus", "isanosaurus", "epachthosaurus", "tarascosaurus", "torosaurus", "paralititan",
      "pegomastax", "tapuiasaurus", "hypsibema", "elaphrosaurus", "siamosaurus", "glacialisaurus", "talenkauen", "bambiraptor", "oviraptor", "stokesosaurus",
      "isisaurus", "huxleysaurus", "yizhousaurus", "zhanghenglong", "eolambia", "alwalkeria", "machairasaurus", "fukuisaurus", "duriavenator", "maiasaura",
      "microceratops", "seismosaurus", "saurolophus", "fukuiraptor", "piatnitzkysaurus", "sinornithoides", "elopteryx", "turiasaurus", "tatankacephalus", "sarcolestes",
      "siamotyrannus", "tendaguria", "sinocalliopteryx", "panoplosaurus", "bactrosaurus", "hexing", "neimongosaurus", "euskelosaurus", "amphicoelias", "kritosaurus",
      "tochisaurus", "adamantisaurus", "atlasaurus", "dysalotosaurus", "acrocanthosaurus", "megaraptor", "quaesitosaurus", "antarctopelta", "berberosaurus", "cerasinops",
      "protarchaeopteryx", "limaysaurus", "hypselosaurus", "asylosaurus", "laquintasaura", "timimus", "rinconsaurus", "neovenator", "cruxicheiros", "dryosaurus",
      "shanag", "scolosaurus", "magnirostris", "beishanlong", "nigersaurus", "mussaurus", "tethyshadros", "massospondylus", "heyuannia", "eodromaeus",
      "jainosaurus", "shunosaurus", "incisivosaurus", "diplodocus", "leshansaurus", "tanius", "batyrosaurus", "proa", "yongjinglong", "tianchisaurus",
      "ceratonykus", "angaturama", "abrictosaurus", "saurophaganax", "hesperonychus", "agujaceratops", "dyslocosaurus", "lycorhinus", "efraasia", "laosaurus",
      "zby", "dollodon", "harpymimus", "peloroplites", "zhuchengosaurus", "camarasaurus", "brachyceratops", "latirhinus", "guanlong", "yutyrannus",
      "zhuchengceratops", "zhenyuanlong", "agustinia", "huaxiaosaurus", "linhevenato_r", "huayangosaurus", "jeholosaurus", "argentinosaurus", "gobivenator", "hippodraco",
      "rapetosaurus", "aucasaurus", "parasaurolophus", "hoplitosaurus", "valdoraptor", "therizinosaurus", "muttaburrasaurus", "zuolong", "deinodon", "zapalasaurus",
      "dromaeosauroides", "fruitadens", "orthomerus", "buitreraptor", "drinker", "yulong", "willinakaqe", "baryonyx", "gryposaurus", "zhejiangosaurus",
      "stegosaurus", "sanjuansaurus", "citipati", "rubeosaurus", "echinodon", "dromiceiomimus", "ouranosaurus", "jinfengopteryx", "euoplocephalus", "macrogryphosaurus",
      "luanchuanraptor", "savannasaurus", "judiceratops", "mahakala", "mojoceratops", "nankangia", "lessemsaurus", "auroraceratops", "hongshanosaurus", "hadrosaurus",
      "sciurumimus", "wannanosaurus", "nanotyrannus", "piveteausaurus", "arcusaurus", "hypacrosaurus", "talos", "minotaurasaurus", "variraptor", "suchomimus",
      "giganotosaurus", "aorun", "panphagia", "nqwebasaurus", "chindesaurus", "khaan", "koreanosaurus", "othnielia", "huanghetitan", "hesperosaurus",
      "amargasaurus", "europelta", "parvicursor", "secernosaurus", "gorgosaurus", "lufengosaurus", "xenoceratops", "deinocheirus", "mirischia", "mapusaurus",
      "pachycephalosaurus", "tsintaosaurus", "udanoceratops", "technosaurus", "giraffatitan", "guaibasaurus", "ozraptor", "leonerasaurus", "sinraptor", "scipionyx",
      "uteodon", "jingshanosaurus", "pyroraptor", "amurosaurus", "albalophosaurus", "chilantaisaurus", "chaoyangsaurus", "eoabelisaurus", "bruhathkayosaurus", "scutellosaurus",
      "tehuelchesaurus", "linheraptor", "enigmosaurus", "minmi", "shamosaurus", "nuthetes", "hylaeosaurus", "goyocephale", "xenoposeidon", "corythosaurus",
      "rajasaurus", "sulaimanisaurus", "ilokelesia", "colepiocephale", "bravoceratops"
    ];
    return words; 
  }

  // Деревья
  topicTreesEn()
  {
    let words = 
    [
      "honeylocust", "black_tupelo", "western_red_ceda", "southern_bayberry", "photinia", "dawyck_european_beech", "pine", "huisache", "cucumber_magnolia", "burk_eastern_redcedar",
      "texas_sophora", "zelkova", "california_incense_cedar", "japanese_fir", "arizona_cypress", "colorado_spruce", "sweet_viburnum", "silver_eastern_redcedar", "retama", "milky_way_japanese_dogwood",
      "white_mulberry", "velvet_cloak_smoketree", "marshall's_seedless_green_ash", "umbrella_common_locust", "maidenhair_tree", "gold_ginkgo", "festival_sweetgum", "thundercloud_cherry_plum", "indian_rosewood", "velvet_cloak_wig_tree",
      "whitebark_maple", "callaway_crabapple", "lilliputian_saucer_magnolia", "goldenchain_tree", "trumpet_tree", "frangipani", "gold_western_red_ceda", "chinese_chestnut", "southern_magnolia", "macho_chinese_corktree",
      "serviceberry", "red_oak", "bismarck_palm", "dynasty_chinese_elm", "yaupon_holly", "japanese_hackberry", "hemlock", "canadian_hemlock", "red_pine", "cypress",
      "india_almond", "black_alder", "korean_evodia", "yellow_elder", "variegated_soft_tip_yucca", "norway_maple", "sweet_bay", "eastern_redcedar", "harvest_gold_crabapple", "ohio_buckeye",
      "india_rubber_fig", "velvet_cloak_smokebush", "tricolor_glossy_privet", "texas_persimmon", "black_calabash", "falsecypress", "tamarind", "heritage_river_birch", "nova_chinese_photinia", "newport_cherry_plum",
      "first_lady_flowering_dogwood", "scholar_tree", "ebony", "pear", "cloak_wig_tree", "slim_jim_american_holly", "pink_trumpet_tree", "canaertii_eastern_redcedar", "chinese_corktree", "japanese_cedar",
      "tree", "giant_cedar", "juneberry", "larch", "skyrocket_eastern_redcedar", "camphor_tree", "variegata_loblolly_bay", "smooth_barked_arizona_cypress", "alder", "sugar_maple",
      "pendula_eastern_white_pine", "weeping_yaupon_holly", "way_japanese_dogwood", "umbrella_tree", "saucer_magnolia", "schefflera", "katsuratree", "hazel", "madagascar_olive", "pagoda_tree",
      "silver_buttonwood", "acoma_crapemyrtle", "white_oak", "vitex", "pendula_european_beech", "pyramidale_silver_maple", "pink_flowering_dogwood", "silverbell", "speciosa_saucer_magnolia", "maackia",
      "poplar", "redbud_crabapple", "arizona_ash", "calocarpa_zumi_crabapple", "elder", "stopper", "bois_d'arc", "southern_sugar_maple", "littleleaf_linden", "cut_leaf_oriental_planetree",
      "summit_green_ash", "japanese_magnoli", "alba_chastetree", "maple", "california_washingtonia_palm", "autumn_gold_ginkgo", "southern_redcedar", "fastigiata_european_hornbeam", "locust", "japanese_flowering_crabapple",
      "purple_tabebuia", "apple_hawthorn", "sweetbay_magnolia", "lemon_bottlebrush", "red_leaf_photinia", "sophora", "green_saw_leaf_zelkova", "paradise_tree", "fig", "pongam",
      "southern_hawthorn", "milky_way_kousa_dogwood", "sycamore_maple", "henry_hicks_sweetbay_magnolia", "pendulus_wig_tree", "caddo_southern_sugar_maple", "podocarpus", "black_olive", "wig_tree", "varnish_tree",
      "spanish_oak", "redmond_basswood", "sweet_osmanthus", "southern_blackhaw", "fernleaf_maple", "alba_vitex", "sycamore", "saw_leaf_zelkova", "devilwood", "blue_spruce",
      "douglas_fir", "floss_silk_tree", "flowering_dogwood", "earleaf_acacia", "ivy_leaf_maple", "glauca_italian_cypress", "aurea_japanese_red_pine", "english_hawthorn", "filbert", "japanese_umbrella_pine",
      "pendulus_smokebush", "powderpuff", "skyline_thornless_honeylocust", "eastern_white_pine", "fairmont_ginkgo", "rosea_carolina_silverbell", "golden_hinoki_falsecypress", "osage_orange", "palm", "bay",
      "white_cedar", "oriental_spruce", "silverpalm", "burgundy_sweetgum", "double_flowering_plum", "japanese_privet", "waxmyrtle", "lime", "variegata_cornelian_cherry", "monterey_cypress",
      "fastigiata_american_linden", "fastigiata_english_oak", "prairie_sumac", "red_flowering_dogwood", "coffeetree", "october_glory_red_maple", "desert_palm", "crimson_king_norway_maple", "bigtooth_maple", "glauca_common_hoptree",
      "thundercloud_purple_leaf_plum", "shining_sumac", "okame_cherry", "aralia", "chinese_sumac", "eastern_hemlock", "sassafras", "river_birch", "chestnut_oak", "viburnum",
      "sawara_falsecypress", "glauca_japanese_white_pine", "fan_palm", "casuarina", "globosum_norway_maple", "chokecherry", "kobus_magnolia", "barbados_flowerfence", "american_hornbeam", "chinese_elm",
      "chalk_maple", "redbud", "cherry_laurel", "winter_king_southern_hawthorn", "windmill_palm", "texas_mountain_laurel", "cattley_guava", "white_poplar", "old_man's_beard", "coral_tree",
      "mimosa", "summershade_norway_maple", "alba_mimosa_tree", "blackhaw", "autumn_purple_white_ash", "red_ceda", "paper_birch", "goldenraintree", "purple_robe_common_locust", "pinkball",
      "mahogany", "tuscarora_crapemyrtle", "seedless_green_ash", "leaf_oak", "japanese_dogwood", "seagrape", "rosewood", "scrub_pine", "false_monkey_puzzle_tree", "bebe_tree",
      "almond", "wingleaf_soapberry", "rosea_mountain_silverbell", "yoshino_cherry", "broadleaf_podocarpus", "three_flowered_maple", "columnar_japanese_pagoda_tree", "lakeview_ginkgo", "sumac", "purple_european_beech",
      "yucca", "bamboo_palm", "live_oak", "sand_pine", "swamp_magnolia", "european_alder", "lychee", "crimson_cloud_english_hawthorn", "indian_horsechestnut", "american_linden",
      "newton_sentry_sugar_maple", "beech", "redcedar", "cherry_plum", "texas_ash", "flowering_tea_crabapple", "mimosa_tree", "acontifolium_fullmoon_maple", "japanese_persimmon", "purple_robe_black_locust",
      "weeping_podocarpus", "pitch_apple", "monkey_puzzle_tree", "glow_cornelian_cherry", "jolivette_cherry", "sweetgum", "christmas_palm", "atropurpurea_cherry_plum", "weeping_willow", "royal_poinciana",
      "western_soapberry", "wright_catclaw", "limber_pine", "formosa_sweetgum", "variegata_india_rubber_fig", "japanese_apricot", "norfolk_island_pine", "china_fir", "catalpa", "red_maple",
      "rusty_fig", "ginkgo", "olmsted_norway_maple", "bird_of_paradise", "spruce", "tallowtree", "goldenball_leadtree", "variegatus_fortune's_osmanthus", "stinking_yew", "toog_tree",
      "upright_japanese_pagoda_tree", "snowbell", "smokebush", "orchid_tree", "kwanzan_cherry", "elegans_japanese_cedar", "japanese_red_pine", "sourwood", "golden_trumpet_tree", "planetree",
      "nagi_podocarpus", "japanese_zelkova", "texas_red_oak", "empress_tree", "kentia_palm", "emerald_queen_norway_maple", "rosea_vitex", "magnolia", "english_yew", "corktree",
      "prickly_castor_oil_tree", "foxtail_colorado_blue_spruce", "skinneri_silver_maple", "royal_palm", "washington_palm", "japanese_pagoda_tree", "american_basswood", "fevertree", "oklahoma_redbud", "areca_palm",
      "yellow_butterfly_palm", "malayan_dwarf_coconut_palm", "turkey_oak", "lignumvitae", "hophornbeam", "ochrosia", "carolina_laurelcherry", "atropurpureum_japanese_maple", "winged_sumac", "japanese_varnish_tree",
      "chinese_sweetgum", "clusia", "keteleeri_eastern_redcedar", "raisintree", "liberty_london_planetree", "chinese_jujube", "zumi_crabapple", "fir", "western_red_cedar", "panicle_hydrangea",
      "gumbo_limbo", "ash", "butterfly_bush", "privet", "cornelian_cherry", "laurel", "ogeechee_lime", "european_birch", "hinoki_falsecypress", "rose_of_sharon",
      "holly", "japanese_white_pine", "montezuma_baldcypress", "persimmon", "candlebrush", "elm", "lacebark_elm", "basswood", "spineless_yucca", "blue_douglas_fir",
      "overcup_oak", "variegated_spineless_yucca", "shingle_oak", "swiss_mountain_pine", "cut_leaf_chastetree", "common_locust", "winterberry", "princess_tree", "eugenia", "japanese_maple",
      "isle_of_capri_oleander", "deodar_cedar", "common_elder", "corkscrew_willow", "muellers_terminalia", "florida_elm", "mexican_plum", "sister_agnes_oleander", "flowerfence", "mexican_cypress",
      "yellowwood", "crabapple", "hawthorn", "red_buckeye", "eve's_necklace", "kousa_dogwood", "japanese_yew", "aurea_american_elder", "silktree", "sourgum",
      "atlas_cedar", "bowhall_red_maple", "pyramidalis_european_alder", "cuban_laurel", "white_spruce", "green_ash", "black_locust", "lusterleaf_holly", "american_yellowwood", "blackbead",
      "apricot", "spire_vitex", "dogwood", "variegata_cucumbertree", "tree_lilac", "camellia", "ceda", "european_ash", "wafer_ash", "chinese_dogwood",
      "bloodgood_london_planetree", "citrus", "osmanthus", "candida_variegated_orchid_tree", "japanese_snowbell", "tupelo", "tea_crabapple", "callery_pear", "biloxi_crapemyrtle", "lacebark_pine",
      "thornless_honeylocust", "blue_atlas_cedar", "tree_ligustrum", "parasol_tree", "colorado_blue_spruce", "pistache", "weeping_atlas_cedar", "all_seasons_sugarberry", "leucaena", "eastern_redbud",
      "cedar_elm", "mondell_pine", "turkish_filbert", "sugar_hackberry", "red_cedar", "leadtree", "tuliptree", "turkish_hazel", "oriental_photinia", "canyon_maple",
      "fishtail_palm", "siberian_crabapple", "crapemyrtle", "baldcypress", "redwood", "yulan_magnolia", "mountain_laurel", "stewartia", "peach", "variegata_loquat",
      "pyramidalis_white_poplar", "royal_purple_wig_tree", "evelyn_hedge_maple", "coconut_palm", "canadian_gold_giant_arborvitae", "buckeye", "plum", "shumard_oak", "black_walnut", "allegheny_serviceberry",
      "weeping_canadian_hemlock", "rosea_chastetree", "pink_powderpuff", "hercules_club", "washington_hawthorn", "purpureus_wig_tree", "chinese_flame_tree", "poinciana", "white_frangipani", "siebold_viburnum",
      "hedge_maple", "variegata_oleander", "american_holly", "yew", "date_palm", "white_ash", "rubber_tree", "calabash", "purpureus_smokebush", "arborvitae",
      "madrone", "glauca_wafer_ash", "anacahuita", "cherry", "moss_cupped_oak", "fastigiata_maidenhair_tree", "variegata_florida_clusia", "willow", "bahama_lysiloma", "lilac",
      "loblolly_bay", "sentry_palm", "baumannii_horsechestnut", "princess_flower", "oriental_planetree", "soapberry", "olive", "white_orchid_tree", "endowment_sugar_maple", "black_pine",
      "sugarberry", "chinese_fringetree", "tulip_tree", "strangler_fig", "pecan", "magnoli", "possumhaw", "ponytail", "fringetree", "cassia",
      "rocky_mountain_juniper", "florida_clusia", "autumn_applause_white_ash", "variegata_cucumber_magnolia", "prairie_pride_common_hackberry", "white_bird_of_paradise", "japanese_torreya", "african_tulip_tree", "buttonwood", "loblolly_pine",
      "alba_saucer_magnolia", "white_pine", "bottlebrush", "italian_stone_pine", "alaska_cedar", "pindo_palm", "flowering_almond", "moraine_sweetgum", "smoketree", "texas_ebony",
      "evergreen_oak", "franklin_tree", "cedar", "erectum_norway_maple", "green_vase_japanese_zelkova", "juniper", "silver_maple", "jacaranda", "weeping_bottlebrush", "winter_king_green_hawthorn",
      "flowering_crabapple", "tropical_almond", "hackberry", "amur_chokecherry", "columnare_norway_maple", "variegata_sweet_bay", "rancho_littleleaf_linden", "glauca_eastern_white_pine", "walnut", "swamp_maple",
      "japanese_black_pine", "milky_way_chinese_dogwood", "seneca_siebold_viburnum", "london_planetree", "canadian_gold_western_red_ceda", "florida_maple", "white_eastern_redbud", "alba_jacaranda", "awabuki_sweet_viburnum", "variegata_pitch_apple",
      "pyramidalis_common_alder", "columnar_scholar_tree", "indies_mahogany", "linden", "dwarf_schefflera", "virgilia", "texan_sumac", "japanese_evergreen_oak", "tabebuia", "oak",
      "chastetree", "yellow_poplar", "birch", "honey_mesquite", "horsechestnut", "guava", "italian_cypress", "yew_pine", "mediterranean_hackberry", "colorado_redcedar",
      "rusty_blackhaw", "oleander", "northern_japanese_magnolia", "robe_black_locust", "ligustrum", "avocado", "common_hoptree", "nellie_stevens_holly", "jelly_palm", "sentry_ginkgo"
    ];
    return words
  }

  // Цветы
  topicFlowersEn()
  {
    let words = 
    [
      "gladiolas", "bouvardia", "flaming_katy", "moraea", "forsythia", "anise_hyssop", "dianthus_barbatus", "daylily", "kangaroo_paw", "deutzia",
      "trachelium", "silene", "nerine", "petunia", "flax_flower", "wandflower", "powder_puff", "iris", "cuckoo_flower", "euphorbia",
      "freesia", "ice_plant", "jasmine", "cape_leadwort", "chionodoxa", "oleander", "hyacinth", "crocosmia", "coneflower", "passion_flower",
      "polyanthus", "fuchsia", "erica", "bergenia", "mayflower", "epimedium", "aster", "crocus", "speedwell", "water_lilies",
      "nolana", "wishbone_flower", "grape_hyacinth", "gerbera_flower", "delphinium", "lewesia", "goldenrod", "shasta_daisy", "ageratum", "penstemon",
      "pinks", "yellow_archangel", "lupin", "verbena", "virginia_creeper", "periwinkle", "weigela", "chrysanthemum", "coreopsis", "buttercup",
      "tithonia", "coral_bells", "peace_lily", "magnolia", "canna_lily", "oxeye_daisy", "lantana", "persian_buttercup", "scaevola", "kniphofia",
      "dill", "scented_geranium", "oxalis", "kalmia", "tuberose", "calceolaria", "blazing_star", "orchid", "roses", "nemophila",
      "butterfly_bush", "johnny_jump_up", "photinia", "candytuft", "linaria", "ballota", "neoregelia", "trollius", "wedelia", "helichrysum",
      "trillium", "holly", "dianella", "chicory", "hollyhock", "calla_lily", "alstroemeria", "morning_glory", "sedum", "dahlia",
      "gazania", "maltese_cross", "winter_jasmine", "ursinia", "laelia", "echinops", "rock_rose", "english_bluebell", "poppy", "cosmos",
      "bottlebrush", "bluebonnets", "parodia", "ipomoea_lobata", "decumaria", "matthiola", "yellow_bell", "nierembergia", "coral_vine", "poinsettia",
      "azalea", "nasturtium", "armeria_maritima", "cyclamen", "zenobia", "olearia", "physostegia", "heather", "new_zealand_tea_tree", "frangipani_flower",
      "daffodil", "geranium", "disa", "cerastium_tomentosum", "corydalis", "tritonia_crocata", "uva_ursi", "cardinal_flower", "woolly_violet", "lavatera",
      "meconopsis", "cornflower", "tulip", "clarkia", "xerophyllum", "forget_me_not", "lunaria", "bergamot", "camellia", "elder",
      "soapwort", "hellebore", "winterberry", "phlox", "kaffir_lily", "snowflake", "tiger_flower", "oyster_plant", "love_in_the_mist", "bee_balm",
      "oriental_lily", "nemesia", "echium", "amaranthus", "alchemilla", "mandevilla", "allium", "borage", "blanket_flower", "columbine",
      "xanthoceras_sorbifolium", "knautia", "calendula", "rose_of_sharon", "viburnum", "flowering_dogwood", "osteospermum", "daisy", "painted_daisy", "peony",
      "xylosma", "firethorn", "lotus", "alyssum", "hydrangea", "heliotrope", "statice", "urn_plant", "catmint", "cape_primrose",
      "potentilla", "lily", "xylobium", "begonia", "watsonia", "bletilla", "black_eyed_susan", "cotoneaster", "brachyscome", "dietes",
      "abutilon", "dandelion", "clematis", "gaillardia", "valerian", "clover", "queen_of_the_meadow", "pincushion_flower", "desert_rose", "ornamental_cherry",
      "fall_crocus", "crown_imperial", "sunflower", "catharanthus", "billbergia", "sage", "whirling_butterflies", "pelargonium", "scilla", "bleeding_heart",
      "triteleia", "erigeron", "tea_rose", "zinnia", "anemone", "narcissus", "bluestar_flower", "hibiscus", "marigold", "quince",
      "acacia", "ixora", "lilac", "moss_rose", "yellow_eyed_grass", "lavender", "carnation", "broom", "starflower", "snapdragon",
      "hawthorn", "aconite", "blue_eyed_grass", "french_marigold", "hosta", "helenium", "moonflower_vine", "ixia", "pansy", "trumpet_vine",
      "quaker_ladies", "california_poppy", "viola", "impatiens", "brassica", "tobacco_plant", "foxglove", "sweet_pea", "feverfew", "larkspur",
      "iceland_poppy", "amaryllis", "lily_of_the_valley", "ornithogalum", "flannel_flower", "gardenia", "rain_lily", "wax_plant", "lemon_verbena", "guzmania",
      "celosia", "hebe", "daphne", "wallflower", "mimosa", "snowdrop", "dutch_iris", "diascia", "hyssop", "marguerite_daisy",
      "balloon_flower", "agapanthus", "eremurus", "evening_primrose", "yarrow", "african_daisy", "bellflower", "rondeletia", "oriental_poppy", "eustoma",
      "honeysuckle"
    ];
    return words;
  }

  // Грибы
  topicMushroomsEn()
  {
    let words = 
    [
      "lactarius_blenniusa", "russula_vescaa", "chalciporus_rubinellusa", "phellinus_populicolaa", "lactarius_porninsisa", "leotia_lubricaa", "clitocybe_phyllophilaa", "paralepista_gilvaa", "hemitrichia_serpulaa", "scutellinia_scutellataa",
      "hypholoma_capnoidesa", "melanoleuca_cognataa", "tricholoma_terreuma", "mycena_aetitesa", "leccinum_variicolora", "galerina_sphagnoruma", "laccaria_amethystinaa", "fomitopsis_pinicolaa", "amanita_citrinaa", "clitocybe_vibecinaa",
      "cheilymenia_stercoreaa", "inonotus_hispidusa", "tubaria_furfuraceaa", "agaricus_micromegathusa", "agaricus_comtulusa", "hygrophorus_russulaa", "pseudoclitocybe_cyathiformisa", "ramaria_eumorphaa", "hygrophorus_persooniia", "morchella_conicaa",
      "xeromphalina_fulvipesa", "coprinopsis_niveaa", "mutinus_raveneliia", "skeletocutis_niveaa", "coprinopsis_cinereaa", "hypsizygus_tessellatusa", "tricholoma_argyraceuma", "spongipellis_pachyodona", "russula_farinipesa", "xylaria_carpophilaa",
      "chalciporus_piperatusa", "rubroboletus_dupainiia", "marasmius_rotulaa", "mycena_renatia", "lactarius_scrobiculatusa", "flammulaster_erinaceellusa", "lyophyllum_loricatuma", "cuphophyllus_pratensisa", "pluteus_salicinusa", "russula_xerampelinaa",
      "mycena_vulgarisa", "clavariadelphus_pistillarisa", "chrysomphalina_chrysophyllaa", "lactarius_serifluusa", "postia_caesiaa", "amanita_virosaa", "gyrodon_lividusa", "agaricus_kriegeria", "agaricus_sylvaticusa", "imperator_rhodopurpureusa",
      "hygrophorus_pudorinusa", "suillus_variegatusa", "amanita_croceaa", "cantharellus_amethysteusa", "hymenoscyphus_calyculusa", "gymnopus_confluensa", "gloeophyllum_sepiariuma", "dacrymyces_chrysospermusa", "colus_pusillusa", "mycena_metataa",
      "flammulina_velutipesa", "tylopilus_rubrobrunneusa", "cystoderma_amianthinuma", "entoloma_lividoalbuma", "cortinarius_glaucopusa", "amanita_nivalisa", "clavulinopsis_luteoalbaa", "suillus_viscidusa", "clavariadelphus_ligulaa", "cheilymenia_granulataa",
      "cortinarius_hemitrichusa", "tricholoma_scalpturatuma", "pleurotus_eryngiia", "agaricus_bisporusa", "cortinarius_triumphansa", "coprinus_sterquilinusa", "rickenella_fibulaa", "helvella_lacunosaa", "ramaria_rubripermanensa", "hohenbuehelia_mastrucataa",
      "suillellus_luridusa", "climacodon_septentrionalisa", "pluteus_leoninusa", "tremella_foliaceaa", "suillus_luteusa", "pseudoinonotus_dryadeusa", "phellinus_igniariusa", "favolaschia_pustulosaa", "tricholoma_portentosuma", "sarcodon_leucopusa",
      "marasmius_siccusa", "entoloma_mougeotiia", "mycena_leptophyllaa", "russula_betularuma", "scleroderma_verrucosuma", "neobulgaria_puraa", "strobilomyces_strobilaceusa", "hygrocybe_flavescensa", "lactarius_turpisa", "suillus_bovinusa",
      "cortinarius_violaceusa", "hygrocybe_intermediaa", "cantharellus_cibariusa", "ischnoderma_resinosuma", "leucopholiota_decorosaa", "pholiota_squarrosaa", "rubroboletus_rubrosanguineusa", "lactarius_repraesentaneusa", "ganoderma_carnosuma", "pluteus_atromarginatusa",
      "chondrostereum_purpureuma", "mycena_diosmaa", "galerina_hypnoruma", "butyriboletus_appendiculatusa", "tricholoma_focalea", "lactarius_piperatusa", "coprinellus_domesticusa", "spathularia_flavidaa", "amanita_pantherinaa", "xylaria_polymorphaa",
      "oudemansiella_mucidaa", "tricholoma_atrosquamosuma", "amanita_gemmataa", "ganoderma_pfeifferia", "pholiota_adiposaa", "panaeolus_semiovatusa", "amanita_muscariaa", "irpex_lacteusa", "thelephora_anthocephalaa", "agaricus_porphyrocephalusa",
      "plicatura_niveaa", "cortinarius_uliginosusa", "cystodermella_cinnabarinaa", "clavulina_coralloidesa", "pholiota_polychroaa", "tricholomopsis_rutilansa", "sarcodon_squamosusa", "serpula_lacrymansa", "mycena_epipterygiaa", "hygrocybe_coccineaa",
      "polyporus_ciliatusa", "cortinarius_collinitusa", "boletus_campestrisa", "sebacina_incrustansa", "pseudoboletus_parasiticusa", "marasmiellus_ramealisa", "exidia_recisaa", "tulostoma_brumalea", "coprinopsis_lagopusa", "stropharia_rugosoannulataa",
      "armillaria_melleaa", "cerioporus_leptocephalusa", "ramaria_strictaa", "tricholoma_inamoenuma", "gliophorus_irrigatusa", "panus_conchatusa", "scleroderma_citrinuma", "tricholomopsis_sulphureoidesa", "armillaria_ostoyaea", "lepiota_cristataa",
      "lactarius_semisanguifluusa", "sarcodon_imbricatusa", "pholiota_microsporaa", "phylloporus_rhodoxanthusa", "psilocybe_samuiensisa", "pleurotus_djamora", "russula_claroflavaa", "cheilymenia_theleboloidesa", "russula_paludosaa", "clavulina_cinereaa",
      "geastrum_triplexa", "pholiota_limonellaa", "phallus_duplicatusa", "lactarius_controversusa", "auricularia_polytrichaa", "pleurotus_dryinusa", "rubroboletus_satanasa", "leucocoprinus_birnbaumiia", "hygrophorus_erubescensa", "caloboletus_calopusa",
      "parasola_leiocephalaa", "stereum_sanguinolentuma", "lycoperdon_echinatuma", "urnula_crateriuma", "geoglossum_fallaxa", "gomphidius_subroseusa", "rhodotus_palmatusa", "tricholoma_saponaceumsa", "fomitopsis_betulinaa", "hydnellum_concrescensa",
      "sparassis_crispaa", "amanita_rubescensa", "boletus_reticulatusa", "lactarius_helvusa", "phlebia_tremellosaa", "catathelasma_ventricosuma", "tuber_oregonensea", "russula_gracillimaa", "trametes_suaveolensa", "guepinia_helvelloidesa",
      "hemimycena_lacteaa", "cerioporus_squamosusa", "gyroporus_cyanescensa", "russula_sardoniaa", "disciotis_venosaa", "leccinum_lepiduma", "entoloma_sericeuma", "typhula_junceaa", "geastrum_pectinatuma", "russula_decoloransa",
      "lepiota_subincarnataa", "entoloma_sinuatuma", "lactarius_spinosulusa", "sarcoscypha_coccineaa", "hydnellum_scrobiculatuma", "hygrocybe_conicaa", "fuscoporia_torulosaa", "panellus_serotinusa", "geastrum_quadrifiduma", "lanzia_echinophilaa",
      "polyporus_umbellatusa", "chlorociboria_aeruginascensa", "ileodictyon_gracilea", "helvella_crispaa", "inocybe_pusioa", "geopora_arenosaa", "melanoleuca_melaleucaa", "mycena_cyanorrhizaa", "clathrus_rubera", "stemonitis_axiferaa",
      "suillus_lakeia", "thelephora_vialisa", "mycena_arcangelianaa", "lyophyllum_connatuma", "exidia_nucleataa", "geoglossum_cookeanuma", "ramaria_rubrievanescensa", "hygrophorus_chrysodona", "craterellus_cornucopioidesa", "gyromitra_infulaa",
      "lactarius_torminosusa", "hygrophorus_agathosmusa", "scutellinia_erinaceusa", "parasola_auricomaa", "agaricus_impudicusa", "butyriboletus_fechtneria", "pholiota_gummosaa", "gymnopus_fusipesa", "contumyces_rosellusa", "suillus_collinitusa",
      "stereum_subtomentosuma", "russula_ochroleucaa", "lactarius_pallidusa", "agaricus_benesiia", "hymenochaete_rubiginosaa", "polyporus_tuberastera", "amanita_vaginataa", "laccaria_laccataa", "ramaria_flavaa", "verpa_bohemicaa",
      "agrocybe_praecoxa", "boletus_subvelutipesa", "agaricus_xanthodermusa", "clavulina_amethystinaa", "hydnellum_peckiia", "entoloma_sericelluma", "xeromphalina_kauffmaniia", "mycena_flavoalbaa", "pluteus_romelliia", "cortinarius_caninusa",
      "cantharellus_subalbidusa", "boletus_auripesa", "geastrum_saccatuma", "hygrophorus_olivaceoalbusa", "echinoderma_echinaceuma", "myriostoma_coliformea", "tuber_macrosporuma", "hydnellum_cyanopodiuma", "entoloma_prunuloidesa", "coprinellus_impatiensa",
      "pseudoplectania_nigrellaa", "leccinum_cyaneobasileucuma", "hydnum_repanduma", "tapinella_atrotomentosaa", "suillus_ploransa", "morchella_steppicolaa", "russula_illotaa", "rhodocollybia_maculataa", "chlorosplenium_chloraa", "agaricus_subperonatusa",
      "sarcoscypha_austriacaa", "lentinus_arculariusa", "clathrus_columnatusa", "calocera_pallidospathulataa", "trametes_betulinaa", "hygrocybe_quietaa", "amanita_franchetiia", "polyporus_melanopusa", "trametes_versicolora", "agaricus_osecanusa",
      "microglossum_viridea", "hygrophorus_eburneusa", "mycena_filopesa", "lycoperdon_excipuliformea", "inocybe_geophyllaa", "suillus_granulatusa", "russula_fragrantissimaa", "infundibulicybe_gibbaa", "dermoloma_cuneifoliuma", "hypholoma_marginatuma",
      "squamanita_paradoxaa", "amanita_vernaa", "lactarius_deterrimusa", "leucoagaricus_leucothitesa", "volvariella_surrectaa", "boletus_regineusa", "tricholoma_sejunctuma", "polyozellus_multiplexa", "asterophora_lycoperdoidesa", "geopora_sumnerianaa",
      "agaricus_pocillatora", "lepista_personataa", "pseudocolus_fusiformisa", "chromosera_cyanophyllaa", "mycena_vitilisa", "armillaria_borealisa", "lactarius_vietusa", "boletus_oliveisporusa", "calocera_corneaa", "peziza_vesiculosaa",
      "tuber_brumalea", "laccaria_proximaa", "amanita_eliaea", "cortinarius_bolarisa", "stropharia_pseudocyaneaa", "lepiota_castaneaa", "laccaria_fraternaa", "russula_virescensa", "otidea_bufoniaa", "mucilago_crustaceaa",
      "tricholoma_virgatuma", "hygrophorus_lucoruma", "gymnopilus_junoniusa", "mycena_haematopusa", "agaricus_arvensisa", "pleurotus_cornucopiaea", "helvella_acetabuluma", "polyporus_brumalisa", "clitocybe_nebularisa", "clavaria_fragilisa",
      "peziza_badiaa", "strobilurus_trullisatusa", "clavaria_zollingeria", "agaricus_sylvicolaa", "kalapuya_brunneaa", "entoloma_cetratuma", "tricholoma_fulvuma", "sarcodon_scabrosusa", "laetiporus_persicinusa", "favolaschia_caloceraa",
      "lactarius_musteusa", "agaricus_moelleria", "lycoperdon_pyriformea", "galerina_marginataa", "exidia_thuretianaa", "pleurotus_populinusa", "cyclocybe_erebiaa", "hortiboletus_engeliia", "hygrocybe_chlorophanaa", "russula_atropurpureaa",
      "discina_perlataa", "mycena_pelianthinaa", "leucopaxillus_gentianeusa", "psilocybe_pelliculosaa", "trichoglossum_hirsutuma", "cortinarius_armillatusa", "astraeus_hygrometricusa", "suillus_intermediusa", "agaricus_campestrisa", "fomes_fomentariusa",
      "tylopilus_ballouia", "cortinarius_armeniacusa", "phallus_rubicundusa", "morchella_purpurascensa", "pluteus_cervinusa", "plectania_melastomaa", "lactarius_indigoa", "panaeolus_cinctulusa", "hygrocybe_fornicataa", "geastrum_fimbriatuma",
      "syzygospora_mycetophilaa", "agaricus_bitorquisa", "fuligo_septicaa", "geopora_cooperia", "panaeolus_fimicolaa", "mycetinis_alliaceusa", "cystolepiota_seminudaa", "cuphophyllus_virgineusa", "hygrocybe_cantharellusa", "xerocomellus_truncatusa",
      "colus_hirudinosusa", "geastrum_minimuma", "mycena_meliigenaa", "hygrocybe_puniceaa", "mycena_aciculaa", "crepidotus_cesatiia", "lactarius_sanguifluusa", "coprinopsis_picaceaa", "pachyella_clypeataa", "hydnellum_caeruleuma",
      "helvellosebacina_concrescensa", "entoloma_conferenduma", "cortinarius_semisanguineusa", "peziza_ammophilaa", "cortinarius_flexipesa", "gymnopilus_luteofoliusa", "pholiota_squarrosoidesa", "amanita_strobiliformisa", "hygrophorus_nemoreusa", "cortinarius_torvusa",
      "caloboletus_radicansa", "hygrophorus_occidentalisa", "hygrophorus_pustulatusa", "chroogomphus_rutilusa", "xylaria_hypoxylona", "clavulinopsis_corniculataa", "gomphidius_maculatusa", "poronia_punctataa", "russula_albonigraa", "leucopaxillus_giganteusa",
      "clavariadelphus_truncatusa", "gymnopilus_liquiritiaea", "mycetinis_scorodoniusa", "ramaria_abietinaa", "cortinarius_croceusa", "bisporella_citrinaa", "gymnopus_androsaceusa", "helvella_ephippiuma", "collybia_tuberosaa", "bulgaria_inquinansa",
      "grifola_frondosaa", "postia_stipticaa", "phellinus_lundelliia", "psilocybe_cyanescensa", "suillus_mediterraneensisa", "scleroderma_areolatuma", "tricholoma_magnivelarea", "peziza_domicilianaa", "entoloma_vernuma", "boletus_edulisa",
      "clavulinopsis_umbrinellaa", "omphalotus_oleariusa", "coltricia_perennisa", "cortinarius_hinnuleusa", "phaeolepiota_aureaa", "inonotus_radiatusa", "crepidotus_applanatusa", "psilocybe_cubensisa", "amanita_excelsaa", "mycena_roseaa",
      "boletus_betulicolaa", "calcipostia_guttulataa", "suillellus_mendaxa", "tylopilus_ferrugineusa", "leucopaxillus_tricolora", "rubinoboletus_rubinusa", "ganoderma_applanatuma", "pycnoporus_cinnabarinusa", "clitocybe_squamulosaa", "cantharellus_tubaeformisa",
      "cyclocybe_aegeritaa", "spinellus_fusigera", "amanita_submembranaceaa", "trichaptum_abietinuma", "russula_queletiia", "phlebia_radiataa", "morchella_importunaa", "tarzetta_cupularisa", "aurantiporus_fissilisa", "rubroboletus_legaliaea",
      "daldinia_concentricaa", "leccinum_vulpinuma", "hemileccinum_impolituma", "russula_aerugineaa", "amanita_regalisa", "geastrum_fornicatuma", "cudonia_confusaa", "lachnellula_aridaa", "pholiota_flammansa", "tremella_mesentericaa",
      "lepiota_felinaa", "hericium_cirrhatuma", "stropharia_coronillaa", "gymnopilus_sapineusa", "mycena_polygrammaa", "turbinellus_floccosusa", "stropharia_caeruleaa", "helvella_macropusa", "aleuria_aurantiaa", "ascocoryne_sarcoidesa",
      "tricholoma_stiparophylluma", "lentinellus_cochleatusa", "morchella_semiliberaa", "lactarius_lignyotusa", "panellus_mitisa", "tuber_gibbosuma", "schizophyllum_communea", "gymnopilus_penetransa", "coltricia_cinnamomeaa", "craterellus_lutescensa",
      "mycena_purpureofuscaa", "calvatia_pachydermaa", "humaria_hemisphaericaa", "clitocybe_maximaa", "helvella_atraa", "amanita_porphyriaa", "dacrymyces_stillatusa", "pisolithus_arhizusa", "leccinellum_crocipodiuma", "collybia_cookeia",
      "morchella_crassipesa", "hygrophorus_camarophyllusa", "harrya_chromapesa", "suillus_subaureusa", "morchella_esculentaa", "russula_aureaa", "laccaria_tortilisa", "heterobasidion_annosuma", "lepista_luscinaa", "morchella_vulgarisa",
      "pholiota_aurivellaa", "tricholoma_caligatuma", "boletus_bicolora", "parasola_conopilusa", "panaeolus_cyanescensa", "parasola_plicatilisa", "mycena_adonisa", "omphalotus_nidiformisa", "leocarpus_fragilisa", "entoloma_chalybaeuma",
      "agaricus_placomycesa", "rubroboletus_demonensisa", "exidia_glandulosaa", "pluteus_pellitusa", "lactarius_deliciosusa", "crucibulum_laevea", "xeromphalina_cauticinalisa", "inocybe_laceraa", "trametes_gibbosaa", "cystoderma_carchariasa",
      "bovista_nigrescensa", "amanita_caesareaa", "cystoderma_granulosuma", "gyromitra_fastigiataa", "galiella_rufaa", "cyathus_ollaa", "entoloma_bloxamiia", "agrocybe_pediadesa", "macrolepiota_proceraa", "sarcosphaera_coronariaa",
      "mycena_alcalinaa", "porphyrellus_porphyrosporusa", "agaricus_leptocaulisa", "sutorius_junquilleusa", "rhizina_undulataa", "hygrocybe_acutoconicaa", "gymnosporangium_clavariiformea", "russula_fragilisa", "gomphidius_smithiia", "stereum_hirsutuma",
      "parasola_lacteaa", "deconica_coprophilaa", "xerocomellus_chrysenterona", "exidiopsis_effusaa", "leucangium_carthusianuma", "abortiporus_biennisa", "ascocoryne_cylichniuma", "leccinum_duriusculuma", "hortiboletus_bubalinusa", "trametes_pubescensa",
      "clitopilus_prunulusa", "pleurotus_nebrodensisa", "cyathus_striatusa", "tuber_magnatuma", "suillus_cavipesa", "trichoglossum_walteria", "cortinarius_salora", "steccherinum_ochraceuma", "daedaleopsis_confragosaa", "pluteus_chrysophaeusa",
      "hygrophorus_bakerensisa", "trichia_decipiensa", "paxillus_involutusa", "hericium_coralloidesa", "xerula_pudensa", "cyathus_stercoreusa", "arrhenia_epichysiuma", "stropharia_aeruginosaa", "cortinarius_anthracinusa", "neoalbatrellus_caeruleoporusa",
      "lepista_sordidaa", "neofavolus_alveolarisa", "turbinellus_kauffmaniia", "gyrodon_merulioidesa", "ramaria_botrytisa", "tuber_borchiia", "rugosomyces_carneusa", "entoloma_hochstetteria", "phellodon_melaleucusa", "mitrula_paludosaa",
      "aseroe_rubraa", "tricholoma_sciodesa", "cortinarius_sanguineusa", "hohenbuehelia_griseaa", "butyriboletus_regiusa", "hydnellum_suaveolensa", "exidia_nigricansa", "mycena_puraa", "thelephora_terrestrisa", "lactarius_mammosusa",
      "conocybe_apalaa", "lycoperdon_perlatuma", "pluteus_velutinornatusa", "cantharellus_cinereusa", "lactarius_maireia", "hygrophorus_hypothejusa", "xerocomus_marekiia", "sebacina_epigaeaa", "cortinarius_cinnamomeusa", "buchwaldoboletus_lignicolaa",
      "marasmius_oreadesa", "lactarius_glyciosmusa", "agaricus_dulcidulusa", "heliocybe_sulcataa", "stropharia_melanospermaa", "tylopilus_variobrunneusa", "podaxis_pistillarisa", "spathularia_velutipesa", "mycena_tintinnabuluma", "strobilurus_stephanocystisa",
      "lycogala_epidendruma", "entoloma_clypeatuma", "volvopluteus_gloiocephalusa", "lactarius_argillaceifoliusa", "boletus_barrowsiia", "cortinarius_camphoratusa", "agaricus_abruptibulbusa", "peziza_arvernensisa", "tricholoma_albuma", "psathyrella_piluliformisa",
      "cortinarius_traganusa", "sarcosoma_globosuma", "agaricus_macrosporusa", "russula_delicaa", "lycoperdon_pulcherrimuma", "panaeolus_antillaruma", "xylaria_longipesa", "cortinarius_praestansa", "pholiota_highlandensisa", "suillus_salmonicolora",
      "cerrena_unicolora", "hydnellum_aurantiacuma", "terana_caeruleaa", "calocera_viscosaa", "pleurotus_pulmonariusa", "psathyrella_laevissimaa", "hericium_erinaceusa", "xerocomellus_fennicusa", "gymnopus_dryophilusa", "phellinus_gilvusa",
      "laetiporus_sulphureusa", "mycena_galericulataa", "russula_variataa", "gymnopilus_dilepisa", "russula_sanguinariaa", "suillus_brevipesa", "tremella_aurantiaa", "lacrymaria_lacrymabundaa", "russula_cyanoxanthaa", "bovista_plumbeaa",
      "tricholomopsis_decoraa", "cortinarius_mucosusa", "nectria_cinnabarinaa", "dumontinia_tuberosaa", "mycena_floridulaa", "microglossum_olivaceuma", "xerocomus_silwoodensisa", "trametes_trogiia", "scutellinia_crucipilaa", "rhizopogon_luteolusa",
      "psathyrella_ammophilaa", "clavulinopsis_laeticolora", "xerocomellus_pruinatusa", "tylopilus_rhoadsiaea", "trametes_ochraceaa", "amanita_vittadiniia", "tricholoma_sulphureuma", "scleroderma_polyrhizuma", "megacollybia_rodmaniia", "gomphus_clavatusa",
      "morchella_rufobrunneaa", "cudonia_circinansa", "lactarius_quietusa", "entoloma_rhodopoliuma", "rubroboletus_lupinusa", "ganoderma_luciduma", "suillus_tomentosusa", "gomphidius_roseusa", "lycoperdon_mammiformea", "flammulaster_muricatusa",
      "russula_densifoliaa", "russula_nobilisa", "trichaptum_biformea", "tricholoma_imbricatuma", "cordyceps_militarisa", "neolentinus_lepideusa", "pholiota_luciferaa", "coprinellus_disseminatusa", "marasmius_bulliardiia", "omphalotus_illudensa",
      "phallus_indusiatusa", "inocybe_erubescensa", "tyromyces_chioneusa", "hydnellum_auratilea", "helvella_spadiceaa", "albatrellus_tianschanicusa", "hygrocybe_conicoidesa", "echinoderma_asperuma", "lentinellus_ursinusa", "phyllotopsis_nidulansa",
      "reticularia_lycoperdona", "entoloma_sericatuma", "tremella_fuciformisa", "geastrum_floriformea", "amanita_fulvaa", "hypsizygus_ulmariusa", "baeospora_myosuraa", "clavaria_fumosaa", "boletus_pseudoregiusa", "mycena_maculataa",
      "tricholoma_cingulatuma", "russula_foetensa", "lyophyllum_decastesa", "galerina_vittiformisa", "ramaria_araiosporaa", "hebeloma_mesophaeuma", "ramaria_formosaa", "lactarius_pubescensa", "chroogomphus_tomentosusa", "rheubarbariboletus_armeniacusa",
      "dacrymyces_capitatusa", "auricularia_mesentericaa", "lactarius_chrysorrheusa", "russula_brevipesa", "boletus_quercicolaa", "leucocoprinus_cepistipesa", "microglossum_rufuma", "chlorophyllum_rhacodesa", "gliophorus_graminicolora", "hygrocybe_spadiceaa",
      "lepista_irinaa", "volvariella_bombycinaa", "cantharellus_cinnabarinusa", "hygrophoropsis_rufaa", "gliophorus_laetusa", "cortinarius_alboviolaceusa", "gyromitra_gigasa", "ramaria_botrytoidesa", "pholiotina_rugosaa", "lactarius_subdulcisa",
      "cortinarius_privignoidesa", "leratiomyces_ceresa", "stereum_rugosuma", "ciboria_amentaceaa", "tricholoma_pardinuma", "stropharia_semiglobataa", "clavulinopsis_fusiformisa", "leccinum_aurantiacuma", "thelephora_penicillataa", "tricholoma_ustalea",
      "tricholoma_vaccinuma", "trametes_hirsutaa", "cortinarius_sodagnitusa", "lactarius_volemusa", "tuber_uncinatuma", "xerocomus_ferrugineusa", "helvella_dryophilaa", "leratiomyces_erythrocephalusa", "gyromitra_esculentaa", "amanita_virgineoidesa",
      "tylopilus_plumbeoviolaceusa", "lactarius_scoticusa", "pholiota_alnicolaa", "boletinellus_merulioidesa", "cortinarius_delibutusa", "suillellus_queletiia", "polyporus_durusa", "leucocoprinus_brebissoniia", "xerocomus_subtomentosusa", "lactarius_tabidusa",
      "microstoma_protractuma", "sarcoscypha_occidentalisa", "lichenomphalia_umbelliferaa", "scutellinia_umbraruma", "hygrocybe_splendidissimaa", "panellus_stipticusa", "inonotus_obliquusa", "cortinarius_rubellusa", "coprinus_comatusa", "bisporella_sulfurinaa",
      "hygrocybe_ceraceaa", "suillus_borealisa", "clitocybe_rivulosaa", "hygrocybe_glutinipesa", "ganoderma_australea", "phellodon_tomentosusa", "hygrophorus_poetaruma", "royoporus_badiusa", "simocybe_centunculusa", "lentinula_edodesa",
      "roridomyces_roridusa", "hymenochaete_corrugataa", "clitopilus_geminusa", "russula_torulosaa", "morchella_deliciosaa", "wynnea_americanaa", "pycnoporellus_fulgensa", "metuloidea_murashkinskyia", "helvella_elasticaa", "conocybe_teneraa",
      "sparassis_americanaa", "morchella_elataa", "morchella_tomentosaa", "cheilymenia_fimicolaa", "bolbitius_titubansa", "hebeloma_radicosuma", "elaphomyces_granulatusa", "coprinellus_hiascensa", "armillaria_ectypaa", "crepidotus_variabilisa",
      "hydnum_rufescensa", "amanita_battarraea", "mycena_citrinomarginataa", "albatrellus_ovinusa", "lepiota_clypeolariaa", "poronidulus_conchifera", "mycena_oregonensisa", "amanita_echinocephalaa", "helvella_queletiia", "lactarius_rufusa",
      "paralepista_amoenolensa", "lentinus_tigrinusa", "artomyces_pyxidatusa", "agaricus_albolutescensa", "clitocybe_odoraa", "boletopsis_griseaa", "suillus_americanusa", "lactarius_psammicolaa", "agaricus_devoniensisa", "calvatia_giganteaa",
      "albatrellus_confluensa", "cordyceps_capitataa", "mycenastrum_coriuma", "pleurotus_ostreatusa", "enteridium_lycoperdona", "russula_emeticaa", "verpa_conicaa", "hortiboletus_rubellusa", "cortinarius_saturninusa", "entoloma_serrulatuma",
      "suillus_belliniia", "marasmius_wynneia", "byssonectria_fusisporaa", "gymnopus_peronatusa", "hymenoscyphus_fructigenusa", "pluteus_petasatusa", "mycena_flavescensa", "agaricus_langeia", "geastrum_coronatuma", "lepiota_magnisporaa",
      "pleurotus_columbinusa", "entoloma_sepiuma", "byssomerulius_coriuma", "lactarius_vellereusa", "lyophyllum_shimejia", "auriscalpium_vulgarea", "russula_grataa", "gliophorus_psittacinusa", "pluteus_umbrosusa", "tylopilus_felleusa",
      "peziza_violaceaa", "tubifera_ferruginosaa", "climacocystis_borealisa", "imleria_badiaa", "amanita_proximaa", "stereum_ostreaa", "stropharia_hornemanniia", "cantharellus_friesiia", "suillus_placidusa", "xeromphalina_campanellaa",
      "cortinarius_variusa", "clitocybe_nudaa", "cyanoboletus_pulverulentusa", "amanita_pachycoleaa", "phellinus_viticolaa", "agrocybe_duraa", "cortinarius_multiformisa", "psilocybe_bohemicaa", "boletus_aereusa", "calvatia_cyathiformisa",
      "leccinum_albelluma", "albatrellus_subrubescensa", "suillus_grevilleia", "helvella_leucomelaenaa", "clathrus_archeria", "suillus_sibiricusa", "microstoma_floccosuma", "phylloporus_pelletieria", "ampulloclitocybe_clavipesa", "battarrea_phalloidesa",
      "russula_auroraa", "porpolomopsis_calyptriformisa", "suillus_spragueia", "pseudohydnum_gelatinosuma", "pleurotus_citrinopileatusa", "otidea_leporinaa", "entoloma_nidorosuma", "resupinatus_applicatusa", "hemimycena_delectabilisa", "coprinellus_micaceusa",
      "cortinarius_caperatusa", "tylopilus_indecisusa", "hygrocybe_reidiia", "macrocystidia_cucumisa", "meripilus_giganteusa", "tuber_melanosporuma", "entocybe_nitidaa", "russula_adustaa", "cortinarius_rufoolivaceusa", "rhodocollybia_butyraceaa",
      "fistulina_hepaticaa", "panus_neostrigosusa", "cortinarius_caerulescensa", "lentinus_strigosusa", "russula_felleaa", "alloclavaria_purpureaa", "russula_dissimulansa", "lycoperdon_pratensea", "psathyrella_corrugisa", "hygrocybe_miniataa",
      "neoboletus_praestigiatora", "ganoderma_resinaceuma", "calostoma_cinnabarinaa", "limacella_illinitaa", "psathyrella_candolleanaa", "cortinarius_orellanusa", "xerocomellus_porosporusa", "pholiota_lubricaa", "cortinarius_anomalusa", "entoloma_incanuma",
      "russula_heterophyllaa", "rubroboletus_rhodoxanthusa", "russula_azureaa", "inocybe_rimosaa", "agaricus_augustusa", "catathelasma_imperialea", "peziza_variaa", "phellodon_nigera", "hypomyces_lactifluoruma", "helvella_costiferaa",
      "asterophora_parasiticaa", "hygrophoropsis_aurantiacaa", "lepiota_brunneoincarnataa", "clavaria_amoenaa", "chlorophyllum_molybditesa", "hypholoma_fascicularea", "macrolepiota_mastoideaa", "calocybe_gambosaa", "leccinum_scabruma", "armillaria_tabescensa",
      "neoboletus_luridiformisa", "hymenopellis_radicataa", "rhizopogon_vulgarisa", "gomphidius_glutinosusa", "leccinum_pseudoscabruma", "postia_fragilisa", "suillus_tridentinusa", "xerocomellus_cisalpinusa", "bjerkandera_adustaa", "gomphidius_oregonensisa",
      "aureoboletus_projectellusa", "otidea_onoticaa", "mycena_galopusa", "mycena_strobilinoidesa", "paxillus_cuprinusa", "pleurotus_australisa", "lactarius_uvidusa", "coprinopsis_atramentariaa", "leccinum_versipellea", "tricholoma_equestrea",
      "phallus_impudicusa", "pholiota_populneaa", "phallus_hadriania", "lysurus_gardneria", "galerina_paludosaa", "lactarius_pyrogalusa", "tuber_indicuma", "chlorociboria_aeruginosaa", "psathyrella_spadiceogriseaa", "armillaria_gallicaa",
      "daedalea_quercinaa", "lactarius_rubidusa", "tubaria_conspersaa", "inocybe_hystrixa", "tricholoma_arvernensea", "tricholoma_stansa", "lycoperdon_utriformea", "helvella_latisporaa", "sebacina_schweinitziia", "leccinum_holopusa",
      "hebeloma_sinapizansa", "panaeolus_olivaceusa", "sparassis_spathulataa", "crepidotus_mollisa", "thelephora_palmataa", "cortinarius_trivialisa", "russula_olivaceaa", "mycena_inclinataa", "lactarius_fuliginosusa", "cantharellula_umbonataa",
      "infundibulicybe_geotropaa", "onnia_tomentosaa", "cortinarius_purpurascensa", "melastiza_chateria", "rhodonia_placentaa", "marasmius_haematocephalusa", "lactarius_camphoratusa", "lepiota_ignivolvataa", "tapinella_panuoidesa", "amanita_phalloidesa",
      "lactarius_fulvissimusa", "agaricus_bernardiia", "amanita_ovoideaa", "guepiniopsis_alpinaa", "leratiomyces_squamosusa", "hydnellum_ferrugineuma", "panaeolus_papilionaceusa", "clitocella_popinalisa", "amanita_ceciliaea", "phaeolus_schweinitziia",
      "clavulina_rugosaa", "collybia_cirrhataa", "peziza_cereaa", "kuehneromyces_mutabilisa", "russula_nigricansa", "tricholoma_orirubensa", "hypholoma_lateritiuma", "paralepista_flaccidaa", "hydnellum_spongiosipesa", "tricholoma_acerbuma",
      "clitocybe_fragransa", "pleurocybella_porrigensa", "geastrum_rufescensa", "hygrophorus_latitabundusa", "lycoperdon_umbrinuma", "melanoleuca_polioleucaa", "tremella_encephalaa", "strobilurus_esculentusa", "mutinus_caninusa", "lycoperdon_nigrescensa",
      "panaeolina_foeniseciia", "clavulinopsis_helvolaa", "morchella_angusticepsa", "postia_tephroleucaa", "byssonectria_terrestrisa", "hygrocybe_aurantiosplendensa", "boletus_pinophilusa", "bovista_pilaa", "psathyrella_longipesa", "chroogomphus_fulmineusa",
      "psilocybe_semilanceataa", "hygrophorus_marzuolusa", "agrocybe_rivulosaa", "tuber_aestivuma", "phallus_multicolora", "tuber_lyoniia", "naucoria_scolecinaa", "russula_turcia", "russula_roseaa", "hebeloma_crustuliniformea",
      "caloscypha_fulgensa", "ramaria_flaccidaa", "kretzschmaria_deustaa", "melanogaster_ambiguusa", "psilocybe_mexicanaa", "lactarius_flavidusa", "phallus_raveneliia", "laccaria_bicolora", "ileodictyon_cibariuma"
    ];
    return words;
  }

  // Ягоды
  topicBerriesEn()
  {
    let words = 
    [
      "cloudberry", "huckleberries", "acai_berry", "cranberry", "boysenberry", "cedar_berry", "blackberry", "cherry_berry", "salal_berry", "goji_berry",
      "baobab_berry", "akebia_fruit", "barberry", "lingonberry", "sea_buckthorn_berries", "mulberry", "mafura_berry", "blueberry", "marula_berry", "strawberry",
      "watermelon_berry", "indian_gooseberry", "gooseberry", "honey_berry", "saskatoon_berry", "yew_berry", "cape_gooseberry", "black_mulberry", "dogwood_berry", "guava_berry",
      "ceylon_gooseberry", "miracle_berry", "raspberry", "kiwi_berry", "golden_berry", "goumi_berry", "elderberry", "asparagus_berry", "tazziberry"
    ];
    return words;
  }

  // Овощи
  topicUtanonEn()
  {
    let words = 
    [
      "chistets", "greens", "bokchoy", "schnitt_luk", "okra", "beetroot", "kohlrabi", "pepper", "loba", "chili",
      "goatee", "basil", "arugula", "yams", "carrot", "corn", "hikama", "katran", "lettuce", "turnip",
      "fennel", "nasturtium", "horseradish", "belokochanna_kapusta", "buryak", "broccoli", "artichoke", "belokotnik", "parsnip", "jerusalem_artichoke",
      "cucumber", "sour", "celery", "avocado", "peas", "beans", "garlic", "asparagus", "radish", "zherukha",
      "abelmosh", "tarragon", "zucchini", "arrowroot", "cyclantera", "gablizia", "bulgarian_pepper", "sweet_potato", "saraha", "lagenaria",
      "arrakacha", "brussels_sprouts", "basella", "ipomoea", "colocint", "peking_cabbage", "daikon", "kiwano", "red_cabbage", "pak_choy",
      "yacon", "patisson", "rhubarb", "uluko", "gherkin", "melotria", "sorrel", "potato", "romanesco", "cabbage",
      "capers", "pumpkin", "sweet_pepper", "luffa", "plantan", "onion", "tomato", "savoy_cabbage", "dill", "maca",
      "parsley", "momordica", "chufa", "marjoram", "spinach", "chickpeas", "eggplant", "savory", "cherry", "tricosant",
      "chayot", "anguria", "radicchio", "rutabaga", "cauliflower", "mustard"
    ];
    return words;
  }

  // Фрукты
  topicBungaEn()
  {
    let words = 
    [
      "mulberry", "eleocarpus", "grapes", "korolek", "peach", "falza", "apple", "mangosteen", "luma", "quince",
      "passionflower", "plum", "mineola", "prickly_pear", "avocado", "jaboticaba", "physalis", "dacriodes", "pereskia", "banana",
      "queenie", "asimina", "apricot", "voavanga", "tamarillo", "mandarin", "carissa", "lychee", "vampi", "grevia",
      "phyllanthus", "birsonima", "jambolan", "pineapple", "rodomirt", "araza", "waxy", "pomelo", "kudrania", "sapodilla",
      "nectarine", "ugni", "jambu", "chupa_chupa", "cantaloupe", "marang", "uchuva", "kuruba", "annona", "pomba",
      "passion_flower", "papaya", "guava", "sweety", "chempedak", "star_apple", "caimito", "lemon", "melon", "sicana",
      "grapefruit", "cocoa", "pitecellobium", "pulazan", "corlan", "pear", "bakkorea", "hawthorn", "heteromeles", "coconut",
      "watermelon", "plumcote", "fig", "canister", "rangpur", "arhat", "akebia", "jambosa", "kiwano", "papeda",
      "aki", "boysen_berry", "kumquat", "ficus", "orange", "gandaria", "cariocar", "melody", "salak", "lime",
      "davidsonia", "garcinia", "pomelite", "durian", "imbu", "rollinia", "muntingia", "astrocarium", "pomarosa", "cherry_plum",
      "medlar", "sapota", "sirsak", "pomegranate", "rambutan", "cocoon", "cherimoya", "sclerocaria", "cryptocaria", "kiwi",
      "longan", "lukuma", "palm", "langsat", "bromelia", "cherry", "gilocereus", "chulupa", "rakum_salakka", "irga",
      "granadilla", "kupuasu", "shepherd's_apple", "coccoloba", "lardizabala", "inga", "oroblanco", "capulin", "lulo", "bunhosia",
      "bakupari", "euterpe", "cashew", "saucep", "grumichama", "jackfruit", "genipa", "chompa", "dogwood", "kepel",
      "santol", "mombin", "carambola", "sugar_apple", "platonia", "persimmon", "austromirtus", "strychnos", "zest", "pitaya",
      "raspberry", "naranjilla", "passion_fruit", "puruma", "feijoa", "chalta", "pandan", "ximenia", "tamarind", "bilimbi",
      "mango", "myrtiaria", "momordica", "syzygium"
    ];
    return words;
  }

  // Минералы
  topicMineralsEn()
  {
    let words = 
    [
      "green_onyx", "kasoite", "blende", "specularite", "ultralite", "isinglass", "lightning_ridge_opal", "dichroite", "mother_of_opal", "nevada_opal",
      "peacock_copper", "tin_stone", "yttrogummite", "sphene", "basanite", "nuttalite", "elie_ruby", "padparadschah", "zinc_blende", "covelline",
      "sylvinite", "schorl", "sericite", "pinite", "halloysite", "cumengite", "antigorite", "common_salt", "endellionite", "gypsum_flower",
      "carbonate_apatite", "iris_quartz", "kingman_turquoise", "verdelite", "red_cobalt", "cactus_quartz", "paricutinite", "tufa", "laumonite", "fassaite",
      "chalcedony", "phantom_quartz", "mali_garnet", "faroelite", "umite", "garnierite", "steatite", "rainbow_quartz", "flint", "argentite",
      "chiastolite", "blister_copper", "azure_copper_ore", "elaeolite", "ferroskutterudite", "praziolite", "opalized_bone", "chaoite", "hiddenite", "dogtooth_calcite",
      "azure_malachite", "yttrocerite", "mexican_fire_opal", "cathedral_pyrite", "african_amethyst", "chrome_titanite", "diatomacious_opal", "virgin_valley_opal", "microcrystalline_quartz", "cog_wheel_ore",
      "chlorospinel", "pistacite", "serpentinite", "fossil_turquoise", "elbaite", "fire_opal", "copper_pyrites", "diasporite", "sand_celestine", "scenic_agate",
      "almandine_spinel", "hydrohalite", "milk_opal", "jade", "potassic_pargasite", "galenite", "heliodor", "petrified_wood", "epsom", "annite",
      "ferrous_chromite", "quicksilver", "mangan_diaspore", "white_feldspar", "picture_rock", "analbite", "botryolite", "flashfire_opal", "niccolo", "peristerite",
      "mineral_salt", "lechosos_opal", "wiluite", "mariposite", "chlorophane", "agalmatolite", "enhydritic_agate", "nickel_bloom", "dryhead_agate", "snow",
      "eliasite", "pezzottaite", "venus_hair_quartz", "pineapple_opal", "red_silver_ore", "watermelon_tourmaline", "hydrophane_opal", "canadian_amethyst", "nipomo_agate", "hydrargyllite",
      "plagioclase_feldspar", "saltpeter", "silicafied_wood", "precious_cat's_eye", "zincostaurolite", "lintonite", "wood_tin", "topazolite", "pseudoleucite", "fluor_elbaite",
      "iron_mica", "nicholsonite", "chrome_magnetite", "jasponyx", "yowah_nut", "magnesiocolumbite", "cleiophane", "corn_spar", "retinalite", "ferro_glaucophane",
      "dark_red_silver_ore", "myrmekite", "honey_opal", "pennine", "titano_magnetite", "chalcedon", "mojave_blue_agate", "emery", "lead_glance", "arsenpolybasite",
      "awaruite", "jargoon", "quinzite_opal", "gymnite", "nephrite", "chert", "lodestone", "hydroxylclinohumite", "liquid_silver", "common_opal",
      "television_rock", "botswana_agate", "kunzite", "levin_opal", "native_copper", "calamine", "hawleyite", "juddite", "radiolite_opal", "pseudoboleite",
      "bort", "chrome_pyrophyllite", "grafito", "lincolnite", "velvet_copper_ore", "mispickel", "stone_canyon_jasper", "leucoxene", "rainbow_hematite", "sodium_nitrate",
      "eden_valley_wood", "rosickyite", "rutilated_quartz", "aegyrine", "gold_opal", "geyserite", "morenosite", "touchonite", "cuboargyrite", "grothite",
      "soda_feldspar", "apricotine", "stalagmite", "bromyrite", "lapis", "native_gold", "seiland_zircon", "snakeskin_agate", "carbonate_rich_fluorapatite", "comuccite",
      "feather_ore", "ferro_actinolite", "wad", "gypsum_rock", "copper_smithsonite", "lemon_opal", "odontolite", "lithoxyl_opal", "pyrhottite", "silver_glance",
      "chalcedonite", "tinzenite", "cabrerite", "polianite", "sagenite_agate", "pencil_ore", "bazzite", "selenite", "stream_tin", "copper_adamite",
      "epitaxy", "allemontite", "bonamite", "wood_iron", "hexagonite", "fairy_stone", "dekalbite", "chrome_tourmaline", "oisanite", "bandfire_opal",
      "star_quartz", "ferro_pargasite", "calciotherite", "blue_jasper", "amethyst_quartz", "erubescite", "coyamito_agate", "crocidolite", "pyrite_cube", "blanchardite",
      "lemon_quartz", "cyrtolite", "hydrargyrum", "moss_opal", "fibrolite", "viridine", "teis_sphere", "salite", "manganoan_calcite", "carbonate_rich_apatite",
      "uvite", "banded_opal", "chrysotile_asbestos", "sammite", "chillagite", "dark_ruby_silver_ore", "sulphur", "picture_jasper", "potash_mica", "ruby_jack",
      "queensland_agate", "reinite", "turgite", "salmon_calcite", "imperial_topaz", "genthite", "kutnohorite", "cronstedtite", "hailstone", "emerald",
      "tiger's_eye", "unakite", "girasol", "horn_silver", "lepidomelane", "tanzanite", "pleonaste", "oriental_garnet", "rainbow_garnet", "venus_hair_stone",
      "heavy_spar", "jasper_opal", "asbestos", "phenacite", "alurgite", "onofrite", "nemalite", "cleavelandite", "sphaerosiderite", "katoite",
      "lavender_amethyst", "fluor_schorl", "fluor", "doyleite", "flame_opal", "collophane", "cadmium_ochre", "schorlomite", "turkey_fat_ore", "native_silver",
      "tube_agate", "potassium_feldspar", "kupfernickel", "dumortierite_quartz", "scherbencobalt", "almandite", "magnesio_riebeckite", "brecciated_jasper", "bustamite", "smokey_quartz",
      "south_african_jade", "umbalite", "epsom_salt", "mountain_cork", "rainbow_opal", "thunder_egg", "manganowollastonite", "cerasite", "williamsite", "chrome_garnet",
      "washingtonite", "cloud_agate", "cromfordite", "fowlerite", "heliotrope", "ruby_spinel", "carbonate_hydroxylapatite", "fluor_dravite", "mushroom_tourmaline", "agatized_wood",
      "mexican_onyx", "magnesio_hastingsite", "green_jasper", "dendritic_agate", "siberite", "amazonite", "gastaldite", "jaspilite", "mizzonite", "agate_opal",
      "hafnium_zircon", "fire_agate", "cactus_citrine", "cave_creek_jasper", "blue_copper", "fluorannite", "pianlinite", "semiopal", "menaccanite", "smoky_quartz",
      "magnesiotantalite", "mackintoshite", "blue_quartz", "serpentine_marble", "soapstone", "tirodite", "iolite", "cadmium_smithsonite", "jelly_opal", "light_opal",
      "ametrine", "niigataite", "cobaltian_calcite", "marble", "sand_gypsum", "chalcotrichite", "tv_stone", "dark_opal", "pitchblende", "blue_lace_agate",
      "coracite", "herschelite", "petschite", "cleveite", "trapiche_emerald", "glacier", "rasorite", "owyhee_jasper", "aquamarine", "sapphire",
      "kaolin", "opal_jasper", "chrysoprase", "cobalt_bloom", "electrum", "polybasite_tac", "siderophyllite", "star_muscovite", "veracruz_amethyst", "rose_quartz",
      "optical_calcite", "titano_hematite", "sodaclase", "prase_opal", "sylvine", "angelite", "fossil_opal", "nickelskutterudite", "evening_stone", "poldervaartite",
      "percylite", "dravite", "hydrogrossular", "alpha_quartz", "native_nickel", "strontian_apatite", "natroapophyllite", "csarite", "adularia", "volga_blue",
      "rosinca", "moor's_head_tourmaline", "deschutes_jasper", "phacolite", "white_opal", "magnetic_pyrites", "blue_john", "deweylite", "fluoro_pargasite", "china_clay",
      "marmatite", "manganophyllite", "travertine", "ferrocolumbite", "troilite", "ericaite", "crazy_lace_agate", "piconite", "indialite", "agua_nueva_agate",
      "coober_pedy_opal", "picotite", "mangocolumbite", "manganapatite", "rhodochrosite_onyx", "bone_turquoise", "eastonite", "nitre", "magnesiostaurolite", "hydrargillite",
      "arsenoferrite", "sideroplesite", "iceland_spar", "clinoferrosillite", "hair_pyrites", "achroite", "hübnerite", "staffelite", "ballas", "tincal",
      "pipe_opal", "amianthus", "native_arsenic", "rainbow_aura_quartz", "rhyacolite", "jasper", "fancy", "nitratite", "hydrogen_dioxide", "aphrite",
      "celestite", "leuco_garnet", "opalized_fossil", "yellow_copper", "moonstone", "native_sulphur", "fossil_agate", "violane", "jacinth", "julianite",
      "keilhauite", "kidney_ore", "laguna_agate", "caswellite", "ruby_silver", "danaite", "antimonite", "fools_gold", "calcareous_tufa", "blue_vitriol",
      "moss_jasper", "bixbite", "condor_agate", "clinothulite", "variegated_copper", "struverite", "salt", "blood_jasper", "chile_saltpeter", "manganocolumbite",
      "bitter_salt", "lennix_emerald", "capillary_pyrites", "iron_rose", "balas_ruby", "amethyst", "malacolite", "annivite", "tigereye", "cherry_opal",
      "goslarite", "fahlerz", "garnet_jade", "orthochrysotile", "oligonite", "enhydro_agate", "morion", "nickel_iron", "brass_ore", "brown_iron_ore",
      "inca_rose", "onyx_opal", "picrochromite", "nostrandite", "colorado_ruby", "isopyre", "yttrofluorite", "white_lead_ore", "chrysomelane", "brecciated_agate",
      "native_platinum", "hypercinnabar", "chessylite", "hydrogarnet", "rock_salt", "dunite", "fayalite", "fluor_liddicoatite", "green_beryl", "dollar",
      "schefferite", "nepouite", "xanthochroite", "schernikite", "groutite", "lithium_mica", "uralite", "hyalophane", "carbonatecyanotrichite", "eilat_stone",
      "cupropyrite", "scepter_quartz", "fluoro_magnesio_arfvedsonite", "precious_beryl", "mangansiderite", "chromian_lawsonite", "soda_lime_feldspar", "clinomimetite", "ruby_sulfur", "fluorapatite",
      "eye_agate", "opal_matrix", "cairngorm", "clinochrysotile", "diatomite", "cyprine", "meteoric_iron", "chrome_diaspore", "hydroxylapatite", "falcon's_eye",
      "redruthite", "pyrite_sun", "tetrataenite", "potassic_arfvedsonite", "horn_lead", "common_garnet", "cuproadamite", "octahedrite", "wadsleyite", "aqua_aura",
      "anorpiment", "native_mercury", "rubellite", "clinoenstatite", "onegite", "cymophane", "pyralspite", "claro_opal", "lizardite", "prasiolite",
      "tourmalinated_quartz", "carbonado", "bayerite", "native_sulfur", "chloanthite", "sardonyx", "mullicite", "red_iron_ore", "sun_opal", "monel_metal",
      "desmine", "hackmanite", "lake_superior_agate", "chromium_dravite", "chalybite", "xanthitane", "freshwater", "souesite", "harlequin_opal", "amatite",
      "bronzite", "paraiba_tourmaline", "gelite", "nickelian_loellingite", "tabasheer", "russian_jasper", "cobalt_calcite", "calcareous_sinter", "magnesiodumortierite", "cactus_amethyst",
      "brimstone", "chrome_spinel", "zultanite", "salammoniac", "stalactite", "amatrix", "plumosite", "opalite", "potch", "chrysopal",
      "chalcedonyx", "arsenical_pyrites", "nickel", "nail_head_spar", "rice_grain_spar", "lonsdaleite", "pyrophane", "white_cliffs_opal", "blushing_copper", "sekaninaite",
      "onice", "chromohercynite", "troostite", "radelerz", "chrome_vesuvianite", "queensland_opal", "amazonstone", "slocum_stone", "amazon_stone", "sunstone",
      "pinpoint_opal", "clay_ironstone", "ferrotitanite", "raspberry_spar", "boulder_opal", "contra_luz_opal", "hibschite", "native_lead", "analcite", "perthite",
      "valencianite", "dauphinite", "manganbabingtonite", "rhodolite", "egyptian_jasper", "spessartite", "fortification_agate", "greenovite", "endellite", "chromio_pargasite",
      "pajsbergite", "praseme", "antimony_glance", "sard", "holly_blue", "peacock_ore", "sweetwater_agate", "zebra_jasper", "limestone_onyx", "arsenolamprite",
      "picrolite", "mother_of_pearl_opal", "vanadiumdravite", "cat's_eye", "chrome_diopside", "bruneau_jasper", "turquoise_odontolite", "sherry_topaz", "kittlite", "dickite",
      "gahnospinel", "wascoite", "raspberry_garnet", "pyritohedron", "silica", "crystal_opal", "metacinnabarite", "ilmenorutile", "binghamite", "blue_cap_tourmaline",
      "pinfire_opal", "red_flash_opal", "starlite", "native_tellurium", "plasma", "cobaltocalcite", "native_antimony", "demantoid", "fuchsite", "soda_niter",
      "haydenite", "hornstone", "flash_opal", "fluorophlogopite", "sand_calcite", "flame_spinel", "milky_quartz", "endlichite", "pericline", "neslite",
      "jeffersonite", "cyanite", "aventurine", "colombian_emerald", "peridot", "baumstarkite", "embolite", "chlorastrolite", "onyx", "iridot",
      "morgan_hill_jasper", "tetraferriphlogopite", "iris_agate", "xanthite", "sagenite", "anorthose", "blue_asbestos", "mullanite", "fluorspar", "pleonast",
      "kaemmererite", "native_bismuth", "arizona_ruby", "calderite", "syrian_garnet", "kinradite", "bohemian_garnet", "golden_beryl", "mountain_leather", "opalized_shell",
      "cromite", "ferro_edenite", "malaya_garnet", "fairburn_agate", "hog_toothed_spar", "white_topaz", "cachalong_opal", "raspberry_beryl", "disthene", "epidesmine",
      "josephinite", "biggs_jasper", "ripidolite", "forsterite", "amber_opal", "television_stone", "faden_quartz", "cornflower_sapphire", "buergerite", "niobite",
      "moss_agate", "thuringite", "precious_fire_opal", "shirozulite", "clinocervantite", "terrestrial_iron", "hercynite", "idocrase", "clarkeite", "antimonpearceite",
      "chrysolite", "manganocalcite", "seraphinite", "tetraferriannite", "painted_boulder", "spherocobaltite", "byssolite", "carbonate_rich_hydroxylapatite", "chromdravite", "automolite",
      "orangite", "baryte", "chalk", "magnesiochromite", "satin_spar", "indicolite", "cherry_blossom_stone", "cobaltoadamite", "kimberlite", "nacrite",
      "uranothorite", "dry_bone_ore", "shell_opal", "grossularite", "rainbow_agate", "acerila", "fluor_buergerite", "arkansite", "salaite", "lussatine",
      "water_opal", "bologna_stone", "rock_crystal", "dolostone", "paint_ore", "agate_jasper", "paracelsian", "anthraconite", "water_sapphire", "liddicoatite",
      "cymatolite", "raspberyl", "pinnite", "chabasite", "melanite", "oregon_snakeskin_agate", "gypsite", "frazil", "viluite", "lithiophylite",
      "wax_opal", "bone_opal", "torite", "king_topaz", "transvaal_jade", "pycnite", "iceland_spar_magnesite", "menilite", "ducktownite", "chlorapatite",
      "galaxite", "african_jade", "taconite", "venus_hairstone", "precious_opal", "common_mica", "strüverite", "lussatite", "alacranite", "plume_agate",
      "morganite", "stassfurtite", "haytorite", "pearl_spar", "capillitite", "strontian", "andamooka_opal", "ledererite", "magnesio_hornblende", "mossottite",
      "halfbreed", "limestone", "mexican_lace_agate", "icicle", "plumbago", "argentotennantite", "schalenblende", "calcspar", "matrix_opal", "lime_soda_feldspar",
      "kamacite", "opalized_wood", "velvet_tourmaline", "feitknechtite", "microcline_and_sanidine", "red_beryl", "marmolite", "rumanite", "leopard_stone", "pearl_opal",
      "vermarine", "occidental_turquoise", "goshenite", "madeira_citrine", "jasp_agate", "cobaltian_adamite", "triphane", "ferrosillite", "lapis_lazuli", "hessonite",
      "heliodorite", "poppy_jasper", "albite_anorthite_series", "adamine", "hancockite", "gigantolite", "thorogummite", "cerargyrite", "hyacinth_opal", "spectrolite",
      "sapphire_quartz", "green_lead_ore", "grape_agate", "yellow_citrine", "frost", "alexandrite", "prase", "rainbow_pyrite", "crystalline_quartz", "ruby_zoisite",
      "utahlite", "spinell", "lettsomite", "hawk's_eye", "calciocelsian", "lead_spar", "ferrowollastonite", "bog_iron", "morrisonite", "chrysotile",
      "variscite_quartz", "hyalite", "yttrotitanite", "peach_beryl", "iserine", "löllingite", "black_jack", "flowstone", "golden_citrine", "herkimer_diamond",
      "iceberg", "carnelian", "noselite", "larimar", "brazilian_amethyst", "dogtooth_spar", "wood_opal", "bloodstone", "needle_tin", "glaze",
      "californite", "asbestos_amphibole", "chrome_tremolite", "gudmundite", "ferro_magnesite", "agate", "mangan_vesuvianite", "light_red_silver_ore", "saltwater", "bowenite",
      "hydroxyapophyllite", "seam_opal", "palmeria_citrine", "titanoferrite", "purple_copper_ore", "noble_orthoclase", "myrickite", "campylite", "orbicular_jasper", "bog_iron_ore",
      "cobaltian_dolomite", "ringwoodite", "rogueite", "parachrysotile", "verde_antique", "binnite", "flos_ferri", "penninite", "desert_rose", "ribbon_jasper",
      "alabaster", "citrine", "potassium_nitrate", "ruby_fuschite", "landscape_agate", "glass_opal", "bolivian_amethyst", "onyx_marble", "picroilmenite", "ceylonite",
      "cobaltian_loellingite", "jaspe", "ferruginous_quartz", "agaric_mineral", "natural_salt", "indigo_copper", "oriental_alabaster", "fraipontite", "snowflake", "leopard_jasper",
      "olivinoid", "rubicelle", "acmite", "argentiferous_galena", "pallasite", "dolomite_rock", "agate_geode", "cinnamon_stone", "black_lead", "leonhardite",
      "tsavorite", "thulite", "malaia_garnet", "cape_may_diamond", "cornelian", "bastite", "cinnabarite", "chrome_enstatite", "kammererite", "fluoro_edenite",
      "amesite", "antozonite", "opaline", "hyacinth", "soaprock", "martite", "wash_opal", "hypersthene", "copper_sulfate", "native_iron",
      "beaumontite", "smaltite", "taenite", "rosolite", "light_ruby_silver_ore", "mica", "orthoantigorite", "orbiculated_jasper", "odinite", "tarnowitzite",
      "suisan_marble", "yellow_lead_ore", "black_opal", "star_sapphire", "orthochamosite", "breunnerite", "copper_vitriol", "bohmite", "seawater", "iron",
      "ugrandite", "liver_opal", "fluor_uvite", "red_lead_ore", "mountain_opal", "hungarian_opal", "fluorapophyllite", "star_ruby", "ram's_horn", "pitch_opal",
      "hauyunite", "ocean_jasper", "serpentine_rock", "hydroxyl_apatite", "fairy_cross", "essonite", "chloropal", "ferrotantalite", "wernerite", "gahnite",
      "carnelian_onyx", "ferro_hornblende", "schwazite", "carbonate_fluorapatite", "ophiolite", "siberian_amethyst", "niccolite", "manganotantalite", "alamandine", "riband_jasper",
      "jargon", "moctezuma_agate"
    ];
    return words;
  }

  // Горные породы
  topicRocksEn()
  {
    let words = 
    [
      "limestone", "bauxite", "amphibolite", "pagodite", "fortunite", "orendite", "jet", "rhyolite", "helsinkite", "sandstone",
      "sortavalite", "unakite", "agalmatolite", "fenite", "trepel", "tufobreccia", "tufoconglomerate", "kieselguhr", "hyaloclastite", "megabreccia",
      "pehstein", "basanite", "greisen", "sand", "irnimite", "okaite", "mudstone", "missurite", "granite", "gisher",
      "alaskite", "picrite", "gabbro", "dresva", "beresite", "microgabbro", "loam", "gravel", "cataclasite", "quartzite",
      "tuff", "white_clay", "yakupirangite", "peridotite", "melteigite", "madupite", "brown_coal", "anhydrite", "liparite", "gravelite",
      "almond", "eclogite", "olivinite", "diatomite", "tuff_sandstone", "turyaite", "geyserite", "plagiogranite", "nephelinite", "obsidian",
      "albitite", "kimberlite", "mica_slate", "vera", "zwitter", "scarn", "verlite", "charoitite", "sprudelstein", "palagonite",
      "silvinite", "vicoite", "limburgite", "granulite", "trachyte", "porphyrite", "larch", "labradorite", "harzburgite", "kugdite",
      "lamproite", "tar_stone", "granitoid", "volcanic_glass", "slate", "wyomingite", "phyllite", "hailite", "diorite", "ophicalcite",
      "anorthosite", "loess", "uncompagrite", "talc_slate", "basalt", "clinopyroxenite", "iyolite", "meteorite", "komatiite", "fitzroite",
      "mandelstein", "pegmatite", "pumice_stone", "gypsum", "melilitolite", "tachylite", "saxonite", "hornblendite", "cedricite", "syenite",
      "dolerite", "spongolite", "norite", "pyroxenite", "andesite", "trachybasalt", "websterite", "cartilage", "catlinite", "urtite",
      "phosphorite", "melilitite", "absarokite", "chalk", "mamilite", "lignite", "ophite", "foidolite", "granophyre", "perlite",
      "tephrite", "cancalite", "laterite", "forellenstein", "orthopyroxenite", "diabase", "augite", "volzhidite", "carbonatite", "serpentinite",
      "madstone", "epidosite", "marble", "crumble", "troctolite", "israndite", "jasper", "anthracite", "humilite", "sandy_loam",
      "amygdalite", "marl", "tufogravelite", "halitite", "dunite", "opoka", "conglomerate", "siltstone", "breccia", "kaolin",
      "travertine", "pebbles", "hawaiite", "tufoaleurolite", "shale", "shell_rock", "gneiss", "pisolite", "coil", "clay",
      "crystalline_shales", "leucogranite", "leucitite", "coal", "chlorite_slate", "mylonite", "lercolite"
    ];
    return words;
  }

  // Осадки
  topicPrecipitationsEn()
  {
    let words = 
    [
      "halo", "squall", "thunderstorm", "frost", "rainbow", "heavy_snow", "snow", "ice", "heavy_sleet", "dusty_snow",
      "haze", "lightning", "mirage", "granular_frost", "ice_groats", "rain", "dust_storm", "translucent_fog", "snow_grains", "ice_needles",
      "crown", "snowstorm", "snowstorm_grassroots", "aurora", "heavy_rain", "drizzle", "fog", "crystalline_frost", "sleet", "ice_fog",
      "tornado", "general_blizzard", "ground_fog", "hail", "ice_rain", "whirlwind", "dew", "snow_groats"
    ];
    return words;
  }

  // Виды водоемов
  topicTypesOfReservoirsEn()
  {
    let words = 
    [
      "sungul", "bolshaya_akulya", "shelyugino", "andreevsky_lake", "iset_lake", "bolshoy_sungul", "tavolzhanoe_lake", "sylvinsky_pond", "bolshoy_kisegach", "chusovoye_lake",
      "alabuga", "chebarkul", "upkankul", "alakul", "zavodskoy_pond", "iriklinsky_reservoir", "tygish", "kamensky_pond", "kasargi", "sosnovoe_lake",
      "sherambai", "kuyash", "verkhneivinsky_pond", "uzunkul", "bolshoy_elanchik", "bolshye_kasli", "white_lake", "bannoye_lake", "myarkai", "vashty",
      "spruce_lake", "light_lake", "podbornoe_lake", "staroshaytansky_pond", "talkov_stone", "sugoyak", "minyar_pond", "urefts", "bilimbaevsky_pond", "uvildy",
      "staroutkinsky_pond", "reftinskoye_reservoir", "zyuratkul", "elansky_pond", "belikul", "dubrovnoye_lake", "kumkul", "singul", "itkul", "tishki",
      "linden_lake", "small_miass_lake", "okunkul", "chernovskoye_lake", "polushinsky_lake", "verkhneuralskoye_reservoir", "karmanovskoye_reservoir", "sineglazovo_lake", "maly_kisegach", "argayash",
      "barsky_corner", "karasye", "satkinsky_pond", "kurgi", "yau_balyk", "kaldy", "belousovo_lake", "teptyargi", "atigsky_pond", "yulash",
      "shchelkunskoye_lake", "shirokovskoye_reservoir", "treustan", "atavdy", "bolshoy_kremenkul", "kainkul", "olkhov_lake", "shchuchye", "smolino", "akakul",
      "beloyarsk_reservoir", "akmanai", "aslikul", "yantykovo_lake", "urgun", "pavlovskoye_reservoir", "kurtuguz", "second_lake", "etkul", "ermekeyevskoye_reservoir",
      "kundravinsky_lake", "caspian_sea", "peskovskoye_lake", "bolshoy_tolpak", "ulagach", "sandy_lake", "sylvinsky_reservoir", "kurochkino", "first_lake", "bolshoe_miassovo_lake",
      "turgoyak", "uelgi", "tavatui", "volchikhinsky_reservoir", "karagaikul", "irtyash", "glukhoe_lake", "baltym", "half_lake", "yumaguzinsky_reservoir",
      "bagaryak", "kama_reservoir", "irbit_lake", "long_lake", "dolgobrodskoye_reservoir", "bottomless_lake", "arakul", "nizhnekamsk_reservoir", "aydykul", "shartash",
      "chebakul", "cheboksary_reservoir", "talkas", "verkhne_shaitan_pond", "nytvensky_pond", "shitovo_lake", "simsky_pond", "bolshye_allaki", "ikbulat", "novoutkinsky_pond",
      "boevskoye_lake", "round_lake", "kuibyshev_reservoir", "argazinsky_reservoir", "votkinsk_reservoir", "novomariinskoye_reservoir", "shershnev_reservoir", "terenkul", "silach", "nugushskoye_reservoir",
      "kandykul", "maksimovsky_lake", "ayat_lake", "pilninsky_pond", "shablish", "aushkul"
    ];
    return words;
  }

  // Растения
  topicPlantsEn()
  {
    let tmpAr = [];
    tmpAr[0] = this.topicTreesEn();
    tmpAr[1] = this.topicFlowersEn();
    tmpAr[2] = this.topicMushroomsEn();
    tmpAr[3] = this.topicBerriesEn();
    tmpAr[4] = this.topicUtanonEn();
    tmpAr[5] = this.topicBungaEn();

    let words = [];

    for (let i = 0; i < tmpAr.length; i++)
      for (let j = 0; j < tmpAr[i].length; j++)
        words.push(tmpAr[i][j]);

    return shuffle(words);
  }

  // Звездные созвездия
  topicStarConstellationsEn()
  {
    let words = 
    [
      "hydrus", "vela", "hydra", "libra", "draco", "horologium", "dorado", "ursa_major", "norma", "andromeda",
      "cetus", "crater", "mensa", "auriga", "ara", "canis_minor", "caelum", "carina", "sextans", "volans",
      "microscopium", "pictor", "reticulum", "lupus", "cancer", "fornax", "apus", "vulpecula", "virgo", "triangulum",
      "orion", "lepus", "scorpius", "grus", "pavo", "musca", "camelopardalis", "corona_borealis", "lacerta", "puppis",
      "equuleus", "antlia", "aquila", "delphinus", "ophiuchus", "piscis_austrinus", "cepheus", "pegasus", "indus", "sagitta",
      "serpens", "pyxis", "sagittarius", "eridanus", "columba", "chamaeleon", "centaurus", "crux", "aries", "canis_major",
      "monoceros", "leo", "boötes", "pisces", "lynx", "perseus", "coma_berenices", "triangulum_australe", "scutum", "lyra",
      "taurus", "sculptor", "aquarius", "leo_minor", "canes_venatici", "capricornus", "octans", "tucana", "corona_australis", "telescopium",
      "phoenix", "gemini", "ursa_minor", "hercules", "circinus", "cygnus", "corvus", "cassiopeia"
    ];
    return words;
  }

  // Микроорганизмы
  topicMicroorganismsEn()
  {
    let words = 
    [
      "torula", "aspergillus", "erwinia", "penicillium_candidum", "bacillus_mycoides", "lactobacillus_delbrueckii", "fusarium_sporotrichiella", "lactobacillus_bulgaricus", "fusarium_graminearium", "mycobacterium_tuberculosis",
      "bacillus_stearothermophilus", "streptococcus_diacetilactis", "xantomonas", "enterobacteriaceae", "debaryomyces", "shigella_dysenteriae", "iersinia", "saccharomyces_lactis", "bacillus_megaterium", "schizosaccharomyces",
      "klebsiella", "clostridium_sporogenes", "saccharomyces_fragilis", "streptococcus_acetoinicus", "candida_utilis", "hansenula", "fusarium", "lactobacillus_acidophilus", "bacillus_coagulans", "penicillium_camamberti",
      "mucor", "bacillus_aerothermophilus", "achromobacter", "azotobacter", "gluconobacter", "citrobacter", "vibrio_cholerae", "clostridium_perfringens", "escherichia_coli", "lactobacillus_fermentum",
      "sarcina", "propionibacterium_shermanii", "mycoderma", "alternaria", "candida_pseudotropicalis", "brucella", "salmonella", "streptococcus_lactis", "listeria_monocytogenes", "bacillus_polimyxa",
      "streptococcus_cremoris", "penicillium_roqueforti", "oidium_lactis", "monilia", "rhodotorula", "staphylococcus_aureus", "clostridium_botulinum", "proteus_vulgaris", "leuconostoc_mesenteroides", "bacillus_mesantericus",
      "clostridium_butyricum", "bacillus_subtilis", "streptococcus_faecalis", "trichoderma", "saccharomycoides", "bacillus_cereus", "lactobacillus_helveticus", "enterobacter", "torulopsis_sphaerica", "streptococcus_thermophilus",
      "streptomyces", "zygosaccharomyces", "torulopsis_kefir", "lactobacillus_brevis", "saccharomyces_cerevisiae", "candida_lipolytica", "cladosporium", "candida_guilliermondii", "pseudomonas_aerogenosa", "lactobacillus_plantarum",
      "pseudomonas_fluorescens", "acetobacter_aceti", "lactobacillus_lactis", "proteus_mirabilis", "catenularia", "leuconostoc_dextranicum", "leuconostoc_cremoris", "clostridium_putrificum", "bacillus_circulans", "serratia",
      "brevibacterium", "clostridium_subterminalis", "botrytis", "flavobacterium"
    ];
    return words;
  }

  // Бактерии
  topicBacteriaEn()
  {
    let words = 
    [
      "enterococcus_faecium", "bifidobacterium_animalis", "cutibacterium_acnes", "gemmatimonas", "aeromonas_hydrophila", "aeromicrobium_camelliae", "alcanivorax_borkumensis", "bordetella_bronchiseptica", "aquificales", "bradyrhizobium_ganzhouense",
      "arthrobacter_agilis", "clostridium_histolyticum", "bradyrhizobium_cytisi", "cupriavidus_metallidurans", "clostridium_septicum", "achromatium", "aeromicrobium", "enterobacter_cloacae", "bacillus_anthracis", "chlamydophila_pneumoniae",
      "bradyrhizobium_arachidis", "caedibacter", "bradyrhizobium_diazoefficiens", "dictyoglomus", "bacillus_cereus", "bradyrhizobium_betae", "bradyrhizobium_daqingense", "bacillus_megaterium", "acidobacteria", "epulopiscium_fishelsoni",
      "chlamydiaceae", "borrelia_recurrentis", "bacteroidetes", "deinococcus_radiodurans", "bartonella_rochalimae", "acaryochloris_marina", "bradyrhizobium_pachyrhizi", "afipia", "chlamydia_trachomatis", "azotobacter_chroococcum",
      "corynebacterium_diphtheriae", "acinetobacter_baumannii", "desulfovibrio", "aquifex_aeolicus", "alcaligenaceae", "bradyrhizobium_lupini", "enterobacterales", "chlamydiales", "bradyrhizobium_lablabi", "bradyrhizobium_liaoningense",
      "chrysiogenes_arsenatis", "blastobacter_henricii", "bradyrhizobium_denitrificans", "aeromicrobium_flavum", "aeromicrobium_ginsengisoli", "geobacter_sulfurreducens", "achromatium_oxaliferum", "clostridium_perfringens", "bradyrhizobium_jicamae", "bradyrhizobium_elkanii",
      "francisella_tularensis", "clostridia", "haemophilus_ducreyi", "brevibacterium_linens", "clostridioides_difficile", "aeromicrobium_alkaliterrae", "delftia_acidovorans", "arthrospira", "bradyrhizobium_yuanmingense", "bordetella_pertussis",
      "bradyrhizobium_canariense", "azotobacter_vinelandii", "chryseobacterium_nematophagum", "gardnerella_vaginalis", "halomonas_titanicae", "faecalibacterium", "deinococcus_thermus", "acidiphilium", "bradyrhizobium_japonicum", "bacillus_thuringiensis",
      "bradyrhizobium", "bdellovibrio_bacteriovorus", "bosea", "burkholderia_pseudomallei", "clostridium_botulinum", "clostridium_sordellii", "desulfobulbus_propionicus", "aquificaceae", "chloroflexus_aurantiacus", "alcanivorax",
      "acetobacteraceae", "alcaligenes_faecalis", "bradyrhizobium_iriomotense", "bradyrhizobium_oligotrophicum", "brucella_melitensis", "chloroflexia", "burkholderia_mallei", "agrobacterium", "beggiatoa", "coxiella_burnetii",
      "bradyrhizobium_paxllaeri", "clostridium_acetobutylicum", "aeromicrobium_choanae", "chlamydophila_psittaci"
    ];
    return words;
  }

  // Вирусы
  topicVirusesEn()
  {
    let words = 
    [
      "monodnaviria", "ebolavirus", "sangassou_orthohantavirus", "finnlakeviridae", "thailand_orthohantavirus", "orthobornavirus", "deltainfluenzavirus", "duplodnaviria", "topografov_virus", "morbillivirus",
      "bayou_orthohantavirus", "pospiviroidae", "pseudoviridae", "roseolovirus", "faustovirus", "gammaretrovirus", "alphavirus", "new_york_virus", "lyssavirus", "herelleviridae",
      "isla_vista_virus", "henipavirus", "pisuviricota", "mononegavirales", "medusavirus", "benyvirus", "duplornaviricota", "adnaviria", "cano_delgadito_orthohantavirus", "soochong_virus",
      "riboviria", "kaumoebavirus", "avsunviroidae", "pegivirus_a", "khabarovsk_orthohantavirus", "orthornavirae", "muju_virus", "asama_orthohantavirus", "prospect_hill_orthohantavirus", "anelloviridae",
      "negarnaviricota", "semotivirus", "ortervirales", "revtraviricetes", "simplexvirus", "ligamenvirales", "pararnavirae", "shotokuvirae", "cedratvirus", "metaviridae",
      "amur_virus", "dinodnavirus", "nucleocytoviricota", "artverviricota", "leishmaniavirus", "mollivirus", "rio_mamore_virus", "ribozyviria", "caudovirales", "marseillevirus",
      "muleshoe_virus", "herpesvirales", "flaviviridae", "flavivirus", "el_moro_canyon_orthohantavirus", "saaremaa_virus", "bunyavirales", "pithovirus", "pandoravirus", "ranavirus",
      "rio_segundo_virus", "lymphocryptovirus", "thottapalayam_orthohantavirus"
    ];
    return words;
  }

  // Еда
  topicFoodEn()
  {
    let tmpAr = [];
    tmpAr[0] = this.topicUtanonEn();
    tmpAr[1] = this.topicBungaEn();

    let words = 
    [
      "achacha", "asida", "alligator", "arroz_con_pollo", "atole", "aioli", "apple_cider_vinegar", "arame", "apple_pie", "ahriche",
      "almond_butter", "anchovies", "apas", "apples", "avgolemono_soup", "apple_fritter", "angus_beef", "adzuki_beans", "apfelkuchen", "aep_mu",
      "aloo_gobi", "drink", "asian_pears", "ambuyat", "acerola", "adobo", "agave", "aniseed_balls", "amaretti_cookies", "adai",
      "almonds", "all_purpose_flour", "arrowroot", "alfalfa", "anejo_cheese", "anmitsu", "angel_food_cake", "asparagus", "ashure", "algae_milk",
      "abgoosht", "antelope", "ahi_tuna", "achiote", "american_cheese", "alfredo_sauce", "andouille_sausage", "arancini", "albacore_tuna", "aalsuppe",
      "acai_berries", "atlantic_salmon", "asopao", "arborio_rice", "ajika", "aonori", "atlantic_oyster", "angel_hair_pasta", "arnold_palmer", "amaranth_leaves",
      "ambrosia", "alphabet_soup", "aguachile", "amaretto", "aubergine", "andagi", "ackee", "arrabiata", "animal_crackers", "arugula",
      "almond_milk", "arepa", "americano", "aloo_baingan", "antipasto", "achu", "avocado_toast", "amarelle_cherries", "annatto", "anise_seeds",
      "appletini", "avocado", "asiago_cheese", "apricots", "asian_greens", "amanatsu", "alfalfa_sprouts", "aligot", "aerated_chocolate", "atchar",
      "asado", "arracacha", "acorn_squash", "allspice", "axoa", "albondigas", "ale", "aush", "aloe_vera", "abbruzze_cheese_spread",
      "artichoke"
    ];

    for (let i = 0; i < tmpAr.length; i++)
      for (let j = 0; j < tmpAr[i].length; j++)
        words.push(tmpAr[i][j]);

    return shuffle(words);
  }

  // Покемоны
  topicPokemonsEn()
  {
    let words = 
    [
      "excadrill", "wattrel", "houndstone", "serperior", "breloom", "stunky", "gurdurr", "bibarel", "magnezone", "kabutops", 
      "kecleon", "toxicroak", "torterra", "trevenant", "xurkitree", "kangaskhan", "poipole", "metagross", "minun", "goomy", 
      "anorith", "mienfoo", "ribombee", "kleavor", "mareanie", "archen", "emolga", "furfrou", "oranguru", "diglett", 
      "boltund", "chien_pao", "victini", "gengar", "seel", "spoink", "vullaby", "wigglytuff", "bellossom", "vibrava", 
      "torracat", "metapod", "igglybuff", "fraxure", "dugtrio", "shuppet", "zygarde", "togetic", "polteageist", "naganadel", 
      "cranidos", "cofagrigus", "meloetta", "sneasler", "weepinbell", "smoliv", "dwebble", "ludicolo", "dratini", "barraskewda", 
      "jangmo_o", "vaporeon", "seaking", "fletchinder", "chandelure", "orthworm", "dragonite", "palpitoad", "sealeo", "cherubi", 
      "rayquaza", "slakoth", "silvally", "inteleon", "basculegion", "vanillish", "exploud", "kyogre", "porygon_z", "petilil", 
      "shaymin", "rockruff", "latias", "spiritomb", "baxcalibur", "meditite", "frogadier", "natu", "sandaconda", "paras", 
      "thwackey", "ducklett", "piloswine", "clauncher", "snivy", "gabite", "arctibax", "persian", "cloyster", "lunala", 
      "deerling", "beheeyem", "feraligatr", "gumshoos", "fearow", "starmie", "wobbuffet", "amoonguss", "dragonair", "mightyena", 
      "great_tusk", "escavalier", "ditto", "baltoy", "bellsprout", "flittle", "patrat", "kommo_o", "arbok", "hariyama", 
      "ledyba", "orbeetle", "armaldo", "tangrowth", "dunsparce", "scraggy", "slugma", "drizzile", "tinkaton", "onix", 
      "cramorant", "steelix", "teddiursa", "marowak", "klefki", "roggenrola", "swoobat", "dondozo", "metang", "rhyhorn", 
      "tyrantrum", "hippopotas", "frillish", "tatsugiri", "groudon", "pheromosa", "swinub", "kingler", "tapu_bulu", "volcanion", 
      "morgrem", "delibird", "swablu", "spheal", "iron_moth", "clodsire", "dedenne", "sandslash", "hoopa", "bonsly", 
      "nidorina", "falinks", "barbaracle", "grafaiai", "silcoon", "yungoos", "nidorino", "octillery", "cobalion", "pupitar", 
      "happiny", "impidimp", "horsea", "spidops", "corphish", "claydol", "carkol", "finizen", "generation_vi", "jirachi", 
      "crabrawler", "seismitoad", "grumpig", "golbat", "staraptor", "qwilfish", "alakazam", "machop", "rabsca", "porygon", 
      "toedscruel", "meowstic", "miltank", "iron_leaves", "volcarona", "pancham", "typhlosion", "accelgor", "wailmer", "electivire", 
      "sawsbuck", "zapdos", "meltan", "aerodactyl", "deino", "salazzle", "magikarp", "carnivine", "grubbin", "totodile", 
      "dartrix", "chimecho", "arceus", "alomomola", "unown", "lugia", "squirtle", "snorunt", "toxapex", "spewpa", 
      "reuniclus", "vanilluxe", "regidrago", "burmy", "medicham", "wimpod", "milcery", "rampardos", "comfey", "dewott", 
      "manectric", "uxie", "glaceon", "misdreavus", "bewear", "okidogi", "fezandipiti", "fidough", "mewtwo", "jumpluff", 
      "virizion", "cyclizar", "minccino", "swadloon", "sableye", "duosion", "maushold", "carvanha", "bouffalant", "hoppip", 
      "cufant", "scizor", "doublade", "indeedee", "cascoon", "gloom", "nihilego", "blitzle", "cubone", "poliwhirl", 
      "wingull", "calyrex", "forretress", "stunfisk", "gliscor", "gourgeist", "terapagos", "cottonee", "nidoking", "walrein", 
      "brute_bonnet", "klawf", "magearna", "drapion", "miraidon", "clefairy", "bastiodon", "pansage", "goodra", "honedge", 
      "woobat", "mankey", "nincada", "machamp", "krabby", "generation_ii", "koffing", "whismur", "magcargo", "budew", 
      "klinklang", "lilligant", "lycanroc", "leavanny", "toxtricity", "amaura", "sudowoodo", "hitmonlee", "blacephalon", "hydrapple", 
      "heatran", "darmanitan", "spearow", "shedinja", "vanillite", "palossand", "garganacl", "bramblin", "mismagius", "quilava", 
      "delphox", "illumise", "smoochum", "regice", "espeon", "gossifleur", "chinchou", "ledian", "darkrai", "wormadam", 
      "carracosta", "ninjask", "tapu_koko", "yveltal", "charmander", "kartana", "arboliva", "salandit", "snubbull", "vileplume", 
      "piplup", "bulbasaur", "vikavolt", "tapu_lele", "clawitzer", "tandemaus", "torchic", "mabosstiff", "sawk", "foongus", 
      "skeledirge", "beedrill", "bronzor", "chatot", "cresselia", "kilowattrel", "blaziken", "avalugg", "turtonator", "terrakion", 
      "articuno", "greedent", "darumaka", "duskull", "milotic", "mawile", "quaquaval", "dottler", "mudbray", "drilbur", 
      "beartic", "nacli", "plusle", "regigigas", "zarude", "sneasel", "pawmot", "scrafty", "flaaffy", "floette", 
      "crawdaunt", "raboot", "tsareena", "lapras", "cacturne", "electrode", "zebstrika", "cryogonal", "ogerpon", "pawmi", 
      "cradily", "monferno", "prinplup", "hatenna", "vespiquen", "pidove", "sewaddle", "shroomish", "druddigon", "crocalor", 
      "golisopod", "mamoswine", "lairon", "wiglett", "ceruledge", "liepard", "ralts", "pinsir", "braixen", "pangoro", 
      "kingambit", "cetoddle", "aron", "furret", "noibat", "iron_bundle", "golurk", "beldum", "passimian", "glalie", 
      "sandy_shocks", "lotad", "regirock", "swellow", "scorbunny", "gigalith", "decidueye", "smeargle", "garchomp", "kadabra", 
      "hattrem", "flutter_mane", "marill", "espurr", "hitmonchan", "solgaleo", "spinarak", "turtwig", "murkrow", "hakamo_o", 
      "beautifly", "tauros", "swalot", "espathra", "landorus", "togepi", "raticate", "combee", "slurpuff", "dewpider", 
      "steenee", "sinistcha", "larvitar", "poochyena", "oinkologne", "farigiraf", "ferroseed", "gothorita", "brambleghast", "mantine", 
      "camerupt", "wooper", "arcanine", "marshtomp", "kricketot", "bruxish", "dudunsparce", "thievul", "quilladin", "staravia", 
      "kingdra", "greninja", "slowking", "grimmsnarl", "spinda", "floatzel", "bisharp", "noivern", "tynamo", "geodude", 
      "corsola", "houndoom", "mew", "exeggutor", "phione", "skarmory", "ferrothorn", "sandile", "mesprit", "sliggoo", 
      "barboach", "alcremie", "tapu_fini", "doduo", "zubat", "makuhita", "ariados", "mantyke", "gallade", "numel", 
      "tentacool", "poliwrath", "jellicent", "sunflora", "braviary", "wugtrio", "azumarill", "skuntank", "chansey", "stantler", 
      "fuecoco", "dodrio", "volbeat", "fletchling", "gyarados", "lombre", "rufflet", "bergmite", "nuzleaf", "froakie", 
      "remoraid", "golett", "popplio", "enamorus", "basculin", "squawkabilly", "larvesta", "skiploom", "parasect", "mareep", 
      "glameow", "skwovet", "tarountula", "skrelp", "coalossal", "trumbeak", "crustle", "sobble", "blastoise", "yamask", 
      "charmeleon", "meganium", "lunatone", "duraludon", "drampa", "spritzee", "dragalge", "trapinch", "toedscool", "probopass", 
      "iron_hands", "armarouge", "pecharunt", "primarina", "mothim", "tangela", "wynaut", "cinccino", "suicune", "aurorus", 
      "malamar", "pidgeot", "voltorb", "oddish", "maractus", "magby", "veluza", "samurott", "magmar", "pidgeotto", 
      "treecko", "leafeon", "weedle", "morelull", "quaxwell", "revavroom", "blissey", "raichu", "arctozolt", "togedemaru", 
      "sizzlipede", "marshadow", "xerneas", "sinistea", "brionne", "heliolisk", "shellos", "farfetch'd", "ho_oh", "iron_crown", 
      "boldore", "wurmple", "glimmora", "entei", "klang", "gholdengo", "gligar", "pidgey", "ninetales", "palkia", 
      "froslass", "morpeko", "nickit", "donphan", "huntail", "croconaw", "aggron", "chingling", "whirlipede", "scyther", 
      "riolu", "slowbro", "bidoof", "florges", "lickitung", "roserade", "caterpie", "gorebyss", "weezing", "cetitan", 
      "solrock", "golem", "loudred", "scovillain", "zoroark", "sandygast", "krookodile", "cyndaquil", "pichu", "growlithe", 
      "muk", "eevee", "psyduck", "infernape", "krokorok", "pincurchin", "scolipede", "butterfree", "buzzwole", "venipede", 
      "scream_tail", "mudkip", "drakloak", "machoke", "cacnea", "generation_ix", "emboar", "yanmega", "talonflame", "tranquill", 
      "sceptile", "dewgong", "rattata", "mimikyu", "snom", "overqwil", "combusken", "guzzlord", "celebi", "skiddo", 
      "slither_wing", "cosmog", "dolliv", "yamper", "nymble", "hawlucha", "generation_viii", "surskit", "fomantis", "zangoose", 
      "glimmet", "absol", "bayleef", "omastar", "dracovish", "abra", "tadbulb", "electabuzz", "eldegoss", "helioptile", 
      "quagsire", "eelektrik", "tyranitar", "ampharos", "spectrier", "litten", "pansear", "azurill", "charjabug", "floragato", 
      "sylveon", "unfezant", "pikipek", "dreepy", "grimer", "rillaboom", "tyrunt", "heracross", "generation_v", "karrablast", 
      "kyurem", "shellder", "cosmoem", "rookidee", "chewtle", "bagon", "vigoroth", "ursaluna", "jolteon", "shinx", 
      "conkeldurr", "haxorus", "seviper", "simipour", "cleffa", "shelmet", "wooloo", "generation_iv", "primeape", "sprigatito", 
      "hoothoot", "dachsbun", "stoutland", "snover", "applin", "glastrier", "frosmoth", "naclstack", "deoxys", "masquerain", 
      "houndour", "ponyta", "stonjourner", "oshawott", "cubchoo", "meowth", "buizel", "skitty", "shuckle", "bunnelby", 
      "flygon", "omanyte", "starly", "tyrogue", "victreebel", "phantump", "dipplin", "vulpix", "herdier", "goldeen", 
      "iron_valiant", "noctowl", "koraidon", "moltres", "luxray", "pawniard", "rotom", "archaludon", "munchlax", "raikou", 
      "bombirdier", "lickilicky", "shiftry", "dubwool", "pignite", "luvdisc", "litwick", "lampent", "raging_bolt", "ting_lu", 
      "electrike", "poliwag", "stakataka", "lanturn", "eternatus", "bellibolt", "kubfu", "manaphy", "torkoal", "pineco", 
      "abomasnow", "shelgon", "shroodle", "zekrom", "meowscarada", "exeggcute", "mienshao", "luxio", "swampert", "gimmighoul", 
      "archeops", "sunkern", "hatterene", "cursola", "gulpin", "ivysaur", "pyukumuku", "lucario", "hydreigon", "clefable", 
      "shieldon", "lumineon", "whimsicott", "venonat", "kabuto", "flamigo", "crobat", "dusclops", "zweilous", "musharna", 
      "audino", "purrloin", "iron_boulder", "servine", "venusaur", "watchog", "genesect", "palafin", "simisear", "magmortar", 
      "chimchar", "graveler", "zeraora", "latios", "axew", "altaria", "weavile", "croagunk", "corvisquire", "roselia", 
      "komala", "bounsweet", "rapidash", "zamazenta", "rellor", "tympole", "kricketune", "incineroar", "trubbish", "hypno", 
      "pachirisu", "pumpkaboo", "empoleon", "inkay", "araquanid", "tinkatink", "corviknight", "charizard", "cinderace", "iron_jugulis", 
      "zacian", "runerigus", "eiscue", "lopunny", "appletun", "staryu", "dustox", "tinkatuff", "slaking", "delcatty", 
      "pyroar", "aromatisse", "wartortle", "scatterbug", "lokix", "drowzee", "aegislash", "oricorio", "heatmor", "yanma", 
      "clamperl", "girafarig", "togekiss", "shiinotic", "politoed", "drifblim", "registeel", "perrserker", "generation_iii", "quaxly", 
      "panpour", "lileep", "clobbopus", "urshifu", "rhydon", "aipom", "iron_treads", "arctovish", "wyrdeer", "drifloon", 
      "lurantis", "grovyle", "grotle", "sigilyph", "minior", "nosepass", "klink", "sentret", "munna", "diancie", 
      "golduck", "gogoat", "cutiefly", "regieleki", "venomoth", "fennekin", "keldeo", "gastrodon", "grapploct", "pawmo", 
      "dialga", "pikachu", "timburr", "finneon", "relicanth", "haunter", "wishiwashi", "galvantula", "capsakid", "swanna", 
      "binacle", "jynx", "bronzong", "toxel", "eelektross", "stufful", "flareon", "generation_vii", "elgyem", "varoom", 
      "grookey", "giratina", "sandshrew", "snorlax", "maschiff", "wo_chien", "purugly", "kakuna", "gible", "whiscash", 
      "walking_wake", "banette", "dusknoir", "pelipper", "dracozolt", "castform", "nidoqueen", "seadra", "frigibax", 
      "xatu", "salamence", "melmetal", "reshiram", "carbink", "blipbug", "linoone", "garbodor", "mudsdale", "seedot", 
      "sharpedo", "tornadus", "ekans", "dragapult", "chesnaught", "arrokuda", "magneton", "zigzagoon", "buneary", "ursaring", 
      "slowpoke", "chikorita", "rowlet", "wailord", "drednaw", "diggersby", "gastly", "swirlix", "thundurus", "taillow", 
      "phanpy", "sirfetch'd", "throh", "feebas", "kirlia", "jigglypuff", "munkidori", "lechonk", "tentacruel", "elekid", 
      "ambipom", "dhelmise", "crabominable", "poltchageist", "solosis", "roaring_moon", "chi_yu", "gothita", "annihilape", "copperajah", 
      "celesteela", "durant", "umbreon", "simisage", "flapple", "gothitelle", "honchkrow", "lillipup", "tropius", "gouging_fire", 
      "hitmontop", "rolycoly", "cherrim", "skorupi", "litleo", "necrozma", "gardevoir", "tirtouga", "charcadet", "joltik", 
      "silicobra", "magnemite", "vivillon", "tepig", "azelf", "granbull", "rhyperior", "mandibuzz", "greavard", "chespin", 
      "hippowdon", "zorua", "centiskorch", "iron_thorns", "obstagoon", "toucannon"
    ];
    return words;
  }

  // Кондитерские изделия
  topicConfectioneryProductsEn()
  {
    let words = 
    [
      "konti_group", "humbugs", "runts", "sweethearts", "yan_yan", "maltesers", "toffifee", "mallo_cup", "bonbon", "nutella",
      "uncle_joe's_mint_balls", "toblerone", "chuckles", "rain_blo", "pop_rocks", "ptasie_mleczko", "lemonhead", "rolo", "milky_way", "nestle",
      "krasny_oktyabr", "maoam", "dairy_milk", "perfetti_van_melle", "trebor", "sugus", "haviland_thin_mints", "munchies", "krackel", "payday",
      "milkfuls", "rocher", "violet_crumble", "hershey's", "reese's_pieces", "crunchie", "fruit_gums", "tootsie_roll_industries", "kinder_egg", "wham_bar",
      "whittakers", "pantteri", "panda", "cella's", "pocky", "fruittella", "bounty", "flumps", "cadbury", "double_dip",
      "twix", "wacky_wafers", "hot_tamales", "quality_street", "maynards", "chewits", "wawel_royal", "randoms", "chupa_chups", "hopje",
      "warheads", "whoppers", "goldenberg's_peanut_chews", "roses", "boyer", "allen's", "sherbet_fountain", "swizzels_matlow", "butterfinger", "kino",
      "starburst", "snickers", "wrigley's", "fruit_pastilles", "terry's", "daim_bar", "hippy_sippy", "fruit_by_the_foot", "grand_bar", "galaxy",
      "skor", "highland_toffee", "ipso", "freddo", "flake", "candy_buttons", "fantales", "now_and_later", "frooties", "polos",
      "dots", "fruit_roll_ups", "life_savers", "starbar", "sugar_daddy", "ferrero", "kopiko", "minties", "barambo", "redskins",
      "matchmakers", "grether's_pastilles", "charleston_chew", "mars_bar", "jujyfruits", "rainbow_drops", "liquorice_allsorts", "campino", "mentos", "dubble_bubble",
      "mintola", "baby_ruth", "walnut_whip", "wispa", "zero", "bottle_caps", "twizzlers", "dolly_mixture", "mounds", "swedish_berries",
      "ummah_foods", "raffaello", "twirl", "jelly_babies", "reese's_whipps", "kit_kat", "brach's", "ferrara", "milk_duds", "crows",
      "fruit_gushers", "wonder_ball", "haribo", "lockets", "arcor", "super_bubble", "almond_joy", "dove_chocolate", "creme_egg", "cherry_ripe",
      "rot_front", "revels", "black_jacks", "choco_treasure", "bobs_candies", "orion", "hubba_bubba", "thorntons", "riesen", "york_peppermint_pattie",
      "yorkie", "mccowan's", "zotz", "neapolitans", "charms_blow_pops", "lindor", "trio", "ice_breakers", "ghirardelli_chocolate_company", "fun_dip",
      "nerds", "russell_stover_candies", "zours", "bazooka", "picnic", "betty_crocker", "skittles", "treets", "anthon_berg", "ülker",
      "turkish_taffy", "trolli", "peeps", "hello_panda", "tunes", "whitworths", "wax_lips", "barratt", "chunky", "wine_gum",
      "extra_strong_mints", "heath_bar", "kinder_bueno", "razzles", "peach_rings", "andes_chocolate_mints", "klene", "great_bite", "topic", "aero",
      "ring_pop", "pixy_stix", "idaho_spud", "roshen", "mojo", "rowntree's", "vimto", "dove", "bassett's", "sports_mixture",
      "parma_violets", "hershey_bar", "chocolaterie_stam", "twinkies", "curly_wurly", "tangerine_confectionery", "doublemint", "fruit_stripe", "sixlets", "airheads",
      "texan", "tic_tac", "kisses", "caramel_apple_pops", "paynes_poppets", "freshen_up_gum", "bamsemums", "whatchamacallit", "fruit_salad", "dum_dums",
      "godiva", "tootsie_pop", "love_hearts", "mars", "refreshers", "terry's_chocolate_orange", "dunkaroos", "cry_baby", "darrell_lea", "tony's_chocolonely",
      "eclairs", "bulls_eyes", "necco_wafers", "everton_mints", "wizz_fizz", "banjo", "fluffy_stuff"
    ];
    return words;
  }

  // Химические элементы
  topicChemicalElementsEn()
  {
    let words = 
    [
      "samarium", "iron", "nihonium", "indium", "copernicium", "curium", "potassium", "thulium", "astatine", "barium",
      "berkelium", "osmium", "europium", "scandium", "iridium", "radon", "antimony", "tennessine", "arsenic", "carbon",
      "chromium", "moscovium", "magnesium", "bismuth", "calcium", "rhodium", "zinc", "lead", "technetium", "gallium",
      "niobium", "erbium", "aluminium", "cesium", "terbium", "tantalum", "praseodymium", "flerovium", "argon", "lanthanum",
      "beryllium", "lawrencium", "fluorine", "molybdenum", "manganese", "thallium", "einsteinium", "yttrium", "cadmium", "nickel",
      "lithium", "francium", "rhenium", "neptunium", "vanadium", "nitrogen", "hassium", "bromine", "protactinium", "dysprosium",
      "cerium", "polonium", "iodine", "actinium", "meitnerium", "selenium", "palladium", "uranium", "gadolinium", "seaborgium",
      "zirconium", "strontium", "thorium", "xenon", "oganesson", "promethium", "darmstadtium", "roentgenium", "helium", "titanium",
      "tellurium", "platinum", "krypton", "radium", "hydrogen", "holmium", "americium", "tungsten", "silver", "rubidium",
      "chlorine", "dubnium", "sodium", "cobalt", "silicon", "germanium", "lutetium", "mercury", "sulfur", "mendelevium",
      "gold", "bohrium", "ytterbium", "neodymium", "tin", "oxygen", "copper", "plutonium", "ruthenium", "californium",
      "neon", "hafnium", "nobelium", "phosphorus", "fermium", "rutherfordium", "boron", "livermorium"
    ];
    return words;
  }

  // Жанры
  topicGenresEn()
  {
    let words = 
    [
      "thriller", "metaphrase", "diatribe", "hilya", "folk_history", "experimental_literature", "gong'an", "novel_with_a_key", "superpovest", "palliata", 
      "tenson", "chiklit", "epic", "hamriyat", "nikki", "robinsonade", "monodrama", "ruritania", "handwritten_girl's_story", "cryptohistory", 
      "didactic_literature", "collection_of_short_stories", "plot_within_a_plot", "nonfiction", "pastoral_novel", "the_story_of_growing_up", "parabola", "mashup", "love_novel", "miniature", 
      "maktub", "spiritual_poems", "author's_genre", "fairy_tale", "auto", "ghost_story", "gunki", "cozy_detective", "novella", "saga", 
      "tula", "novel_of_manners", "dialogue", "greek_novel", "robber_novel", "lament", "frashka", "paradoxography", "novel_of_education", "psychological_novel", 
      "dithyramb", "consolation", "chivalric_romance", "periple", "novelization", "romantic_fantasy", "juvenilia", "tabloid_novel", "antibiography", "prose_poem", 
      "picaresque_novel", "mystery", "historical_prose", "schwank", "lyrical_prose", "lapidary", "teaching", "impressionism", "professorial_novel", "paranormal_love_novel", 
      "melodrama", "noir", "new_age_drama", "anthem", "greg", "syrah", "teen_literature", "perepev", "menippea", "novel", 
      "refugee_novel", "gallant_novel", "stalag", "protreptic", "dark_romanticism", "walking", "extravaganza", "historical_love_novel", "crime_novel", "legend", 
      "courtly_literature", "apocrypha", "epistle", "pamphlet", "anti_vedic_pamphlet", "men's_adventures", "zuhdiyat", "apologist", "novel_chronicle", "ode", 
      "roman_river", "grin", "psychological_thriller", "alternative_history", "kusadzosi", "southern_gothic", "pateric", "parable", "detective", "visions", 
      "table_conversation", "erotic_literature", "action_movie", "avadana", "menippov_satire", "women's_literature", "sonnet", "mobile_literature", "calendar_poetry", "police_novel", 
      "utopia", "invective", "aphorism", "togata", "essay", "life", "tragic_stories", "horror_comedy", "paraphrase", "romance", 
      "impromptu", "satirical_drama", "epistolary_literature", "philosophical_novel", "true_edge", "dwarf", "fablio", "fastnachtspiel", "apophegma", "sum", "memoirs", 
      "scandinavian_strand", "macaronism", "fable", "zajal", "socratic_dialogue", "postilla", "short_story", "romfant", "jeremiad", "autofiction", 
      "eulogy", "novel_feuilleton", "epistolary_novel", "production_novel", "makama", "christmas_story", "non_fiction", "byvalschina", "biography", "dzyakugo", 
      "grobianism", "epitaph", "cyberpunk", "autobiography", "historical_detective", "maxim", "punk_literature", "literary_fairy_tale", "tendentious_literature", "vilansete", 
      "literature_of_the_absurd", "gothic_literature", "lampoon", "travel_essay", "compendium", "splatterpunk", "horror", "poetry_flarf", "drama", 
      "burlesque", "technotriller", "police_drama", "humorous", "hybrid_genre", "kinds_of_literature", "idyll", "genre_literature", "family_chronicle", "children's_literature", 
      "tragicomedy", "feuilleton", "cool_detective"
    ];
    return words;
  }

  // Цвета
  topicColorsEn()
  {
    let words = 
    [
      "lilac", "rustic_red", "cardinal", "bronze", "rhodamine_red", "legal_pad_yellow", "rich_gray", "tortoise_shell_brown", "bright_orange", "misty_rose",
      "blood_red", "racing_red", "cinnamon", "matte_gray", "jade", "plum", "silvery_pink", "dorian_gray", "khaki", "olive",
      "rosy_pink", "sepia_brown", "flamingo_pink", "christmas_red", "moss_green", "french_blue", "ruby", "fluorescent_green", "tan", "cerulean",
      "very_gray", "jade_green", "fluorescent_yellow", "dark_green", "midnight_blue", "sapphire", "light_red", "pastel_yellow", "eggplant", "strawberry",
      "dark_red", "indigo_blue", "road_sign_green", "light_pink", "steel_gray", "goldfish_orange", "pastel_pink", "rose", "lightsaber_red", "spearmint",
      "scarlet_red", "true_silver", "fire_truck_red", "fluorescent_blue", "advent_purple", "burnt_sienna", "cyan", "chrome", "taupe_brown", "army_green",
      "royal_purple", "titanium_white", "celadon", "ice_gray", "electric_blue", "coral_pink", "malachite", "teal", "aqua", "forest_green",
      "mint_blue", "medium_brown", "salmon", "ecru", "dazzling_blue", "charcoal", "whiskey_brown", "lavender", "spring_green", "lawn_green",
      "royal_blue", "oxford_gray", "bisque", "office_green", "olivine", "honolulu_blue", "cool_gray", "burnt_umber", "gun_smoke_gray", "millennial_pink",
      "bright_pink", "road_sign_orange", "gold", "plum_purple", "ivory", "terracotta", "watermelon", "brick_red", "timberwolf_gray", "satin_sheets_gold",
      "taupe", "pear", "pewter", "dusty_rose_pink", "apricot", "persimmon", "firebrick", "dark_sand_brown", "pale_pink", "cloud_burst_blue",
      "olive_brown", "falu_red", "lip_pink", "baby_yellow", "siena_brown", "bone", "myrtle", "purple", "vibrant_pink", "sage_green",
      "tennis_court_green", "pine_green", "bright_blue", "oxblood_red", "french_rose", "grapefruit_pink", "road_sign_blue", "highlighter_pink", "puce", "blue",
      "sea_blue", "periwinkle", "lemon_yellow", "leather_brown", "champagne_pink", "peacock_blue", "ochre", "clay", "coffee_brown", "mustard_yellow",
      "yellow", "taxi_cab_yellow", "king_blue", "road_sign_yellow", "burlap_brown", "chocolate_brown", "heliconia", "monarch_orange", "dark_purple", "lime_green",
      "baby_pink", "cotton_candy_pink", "amber_brown", "cinnabar", "marines_blue", "blush_pink", "wisteria", "gamboge", "carrot_orange", "bright_green",
      "kelly_green", "agreeable_gray", "denim_blue", "tyrian_purple", "cherry_red", "leaf_green", "harlequin", "burgundy", "light_purple", "copper",
      "pearl_pink", "ultramarine", "pastel_purple", "sepia", "xanthic", "aquamarine", "maroon", "cornflower_blue", "light_zerg_purple", "vermilion",
      "cream", "eucalyptus", "ocean_blue", "police_blue", "mint_green", "ash_gray", "chocolate", "dark_orange", "green_screen_color", "sweet_pink",
      "mauve", "malibu_blue", "pastel_orange", "powder_blue", "seashell", "mulberry", "white", "olive_green", "school_bus_yellow", "papaya_whip",
      "midnight_purple", "psychedelic_purple", "grey", "templeton_gray", "heliotrope", "amber", "dark_steel_gray", "green", "milano", "pink",
      "linen", "dark_chocolate_brown", "light_blush", "valentine_pink", "sandy_brown", "safety_orange", "espresso_brown", "navy_blue", "cocoa_brown", "melon",
      "halloween_orange", "rich_brown", "denim", "peach", "cetacean_blue", "russet", "indigo", "cornflower", "pastel_red", "gunmetal_gray",
      "neon_green", "golden_yellow", "pacific_blue", "christmas_green", "tiger_orange", "passion_pink", "magnolia", "light_orange", "warm_brown", "harvest_gold",
      "cortana_blue", "legendary_gray", "platinum", "crimson", "neon_purple", "viridian", "brown", "light_blue", "mocha", "safety_yellow",
      "silver", "aqua_green", "saffron", "road_sign_brown", "lightsaber_blue", "light_brown", "walnut_brown", "neon_pink", "wood_brown", "shamrock_green",
      "sea_green", "bubblegum_pink", "slate_gray", "spring_bud", "bright_red", "aluminum", "cherry_blossom_pink", "cerise", "army_brown", "fuchsia",
      "emerald_green", "comic_book_yellow", "rotary_blue", "antique_gray", "varsity_red", "coyote_brown", "ruby_red", "carnation_pink", "hot_pink", "musket_brown",
      "flower_pink", "han_purple", "deep_pink", "slate_grey", "caramel", "carolina_blue", "neon_orange", "rust", "charcoal_gray", "amaranth",
      "corn", "shrek_green", "dark_yellow", "bear_brown", "rose_red", "sawgrass_brown", "orchid", "rich_blue", "earthy_red", "cobalt_blue",
      "military_green", "pale_gold", "rich_red", "bistre", "petrol", "warm_gray", "coral", "scarlet", "dandelion", "concrete",
      "carmine", "orange", "champagne", "oxford_brown", "auburn", "pastel_green", "nude_pink", "smalt", "corn_green", "thistle",
      "neon_yellow", "wine_red", "seafoam_green", "red", "robin_egg_blue", "flax", "bright_navy", "us_navy_blue", "girl_scout_green", "alizarin",
      "amethyst", "cement_gray", "fern_green", "tennis_court_blue", "violet", "pumpkin", "sangria", "azure", "raw_umber", "goldenrod",
      "bright_yellow", "neutral_gray", "razzmatazz", "gainsboro_gray", "classic_purple", "columbia_green", "heather_gray", "light_gray", "chartreuse", "french_gray",
      "lemon", "blue_green", "cobalt", "lime", "lightsaber_green", "magenta", "brass", "glowing_moon_yellow", "black", "sandstone",
      "soft_pink", "eye_brown", "tangerine", "wheat", "birch", "camouflage_green", "terra_cotta", "zucchini", "hair_brown", "grass_green",
      "salmon_pink", "dark_blue", "van_dyke_brown", "bondi_blue", "fluorescent_pink", "pale_blue", "summer_yellow", "comic_book_red", "beige", "golden_brown",
      "blue_screen_of_death", "camel", "caput_mortuum", "red_orange", "dirt_brown", "quartz_grey", "knockout_pink", "medium_dark_red", "moss", "pastel_gray",
      "pastel_blue", "sage_gray", "gold_pink", "hunter_blaze_orange", "burnt_orange", "lemon_chiffon", "steel_blue", "canary_yellow", "rosy_brown", "primary_blue",
      "nickel_gray", "dark_gray", "bright_purple", "sheffield_gray", "aqua_blue", "construction_orange", "asparagus", "emerald", "baby_blue", "teal_blue",
      "hunter_green", "chambray_blue", "neon_blue", "banana_yellow", "irish_green", "yellow_green", "mustard", "dark_brown", "neon_red", "midnight_green",
      "sapphire_blue", "light_yellow", "blue_violet", "chestnut", "turquoise", "tomato", "pumpkin_spice_orange", "buff", "oatmeal", "reflex_blue",
      "metallic_gray", "graphite_gray", "vermillion", "pale_yellow", "hollywood_cerise", "asphalt_gray", "dark_pink", "fun_yellow", "navajo_white", "sky_blue",
      "prussian_blue", "paper_bag_brown", "shocking_pink"
    ];
    return words;
  }

  // Страны
  topicCountriesEn()
  {
    let words = 
    [
      "san_marino", "tonga", "tuvalu", "mauritius", "brunei", "costa_rica", "czechia", "tunisia", "uzbekistan", "morocco",
      "angola", "austria", "eritrea", "sweden", "gabon", "kazakhstan", "maldives", "turkey", "saudi_arabia", "comoros",
      "united_states_of_america", "senegal", "australia", "switzerland", "france", "norway", "myanmar", "lithuania", "mozambique", "bahamas",
      "saint_kitts_and_nevis", "iceland", "malaysia", "romania", "guatemala", "chad", "mongolia", "liberia", "andorra", "zimbabwe",
      "argentina", "latvia", "netherlands", "venezuela", "honduras", "lesotho", "new_zealand", "laos", "liechtenstein", "palau",
      "djibouti", "ukraine", "belarus", "benin", "sierra_leone", "monaco", "belgium", "bhutan", "italy", "chile",
      "afghanistan", "cambodia", "spain", "fiji", "qatar", "el_salvador", "namibia", "papua_new_guinea", "singapore", "north_macedonia",
      "holy_see", "hungary", "india", "nepal", "georgia", "uganda", "denmark", "timor_leste", "montenegro", "kuwait",
      "philippines", "uruguay", "serbia", "moldova", "mali", "malta", "china", "ecuador", "croatia", "vietnam",
      "slovenia", "thailand", "iraq", "azerbaijan", "saint_lucia", "sao_tome_and_principe", "indonesia", "nicaragua", "sri_lanka", "albania",
      "armenia", "mauritania", "samoa", "somalia", "democratic", "colombia", "vanuatu", "south_africa", "north_korea", "paraguay",
      "dominican_republic", "greece", "madagascar", "guinea_bissau", "israel", "burkina_faso", "guyana", "egypt", "turkmenistan", "kyrgyzstan",
      "panama", "zambia", "canada", "belize", "marshall_islands", "jamaica", "ireland", "rwanda", "kenya", "united_arab_emirates",
      "japan", "russia", "jordan", "south_sudan", "tajikistan", "cameroon", "cuba", "botswana", "iran", "luxembourg",
      "tanzania", "malawi", "niger", "united_kingdom", "syria", "congo", "nigeria", "algeria", "antigua_and_barbuda", "burundi",
      "slovakia", "lebanon", "bangladesh", "nauru", "finland", "sudan", "micronesia", "poland", "solomon_islands", "ghana",
      "barbados", "grenada", "palestine_state", "guinea", "seychelles", "pakistan", "dominica", "portugal", "bahrain", "suriname",
      "brazil", "equatorial_guinea", "oman", "ethiopia", "cabo_verde", "libya", "central_african_republic", "kiribati", "peru", "cyprus",
      "south_korea", "bulgaria", "bosnia_and_herzegovina", "mexico", "gambia", "togo", "yemen", "estonia", "germany", "bolivia",
      "haiti", "trinidad_and_tobago"
    ];
    return words;
  }

  // Города
  topicCitiesEn()
  {
    let words = 
    [
      "berezniki", "verkhnyaya_pyshma", "shagonar", "mozdok", "priozersk", "novosokolniki", "rzhev", "kirovo_chepetsk", "slobodskoy", "kanash",
      "strezhevoy", "kamensk_uralsky", "balakhna", "oktyabrsky", "bryansk", "kamyzyak", "mamadysh", "pudozh", "sevsk", "olonets",
      "spassk_ryazansky", "luga", "moskovsky", "aleksin", "velikiye_luki", "terek", "vidnoye", "alzamay", "rodniki", "krasnovishersk",
      "tikhoretsk", "nikolskoye", "zeya", "goryachy_klyuch", "kasli", "revda", "pugachyov", "zadonsk", "digora", "usman",
      "laishevo", "novocheboksarsk", "kyakhta", "zaraysk", "severouralsk", "nikolayevsk", "yuryevets", "verkhoyansk", "dmitrov", "angarsk",
      "uray", "kolpashevo", "kandalaksha", "dno", "shakhty", "odintsovo", "berdsk", "karasuk", "novodvinsk", "kremyonki",
      "buzuluk", "shali", "nizhnyaya_salda", "alagir", "tara", "venyov", "kaspiysk", "semiluki", "tyukalinsk", "belgorod",
      "klintsy", "zhigulyovsk", "yukhnov", "ostashkov", "chaykovsky", "ukhta", "smolensk", "makhachkala", "yefremov", "porkhov",
      "naryan_mar", "kurlovo", "plavsk", "lyubertsy", "morozovsk", "ustyuzhna", "severobaykalsk", "zvenigovo", "murashi", "mozhga",
      "zelenodolsk", "povorino", "verkhnyaya_salda", "yemva", "moscow", "agidel", "prokopyevsk", "vyksa", "dzerzhinsky", "novomichurinsk",
      "polyarnye_zori", "ozyory", "sukhinichi", "onega", "lyudinovo", "tarko_sale", "furmanov", "chebarkul", "kaliningrad", "volgograd",
      "kronstadt", "salair", "nevel", "orenburg", "khasavyurt", "drezna", "zhukov", "argun", "petukhovo", "baymak",
      "dagestanskiye_ogni", "pochinok", "perm", "podolsk", "tula", "belovo", "kubinka", "ilansky", "gorodets", "balabanovo",
      "tutayev", "kirovsk", "baksan", "chernogorsk", "uglegorsk", "kuvandyk", "yelnya", "zima", "klin", "sursk",
      "sudzha", "kosteryovo", "melenki", "novokhopyorsk", "poshekhonye", "ust_labinsk", "khotkovo", "kirensk", "neryungri", "sharypovo",
      "pikalyovo", "yuryuzan", "tavda", "primorsko_akhtarsk", "salekhard", "baltiysk", "nesterov", "tarusa", "lyskovo", "kirsanov",
      "chukhloma", "yessentuki", "korsakov", "kharovsk", "gadzhiyevo", "barnaul", "lensk", "uchaly", "novotroitsk", "vorkuta",
      "kineshma", "sobinka", "asbest", "pionersky", "kozlovka", "tayshet", "yakutsk", "pushchino", "sergach", "starodub",
      "kumertau", "arzamas", "zverevo", "karachev", "zelenograd", "dankov", "nikolsk", "pechora", "uyar", "talitsa",
      "davlekanovo", "novozybkov", "kizlyar", "mirny", "kirov", "kholm", "shadrinsk", "mezhdurechensk", "svetly", "svetlograd",
      "kotlas", "serpukhov", "tomsk", "gusev", "svobodny", "ladushkin", "pevek", "privolzhsk", "pytalovo", "olyokminsk",
      "zernograd", "mtsensk", "dukhovshchina", "ulan_ude", "komsomolsk", "volgodonsk", "sovetskaya_gavan", "tuymazy", "ust_katav", "sim",
      "nizhnevartovsk", "serov", "abinsk", "zavitinsk", "neya", "vereya", "salavat", "shelekhov", "desnogorsk", "votkinsk",
      "ishim", "kolpino", "yubileyny", "rybinsk", "kargat", "mikhaylovsk", "turinsk", "sertolovo", "kopeysk", "nyandoma",
      "sokol", "korenovsk", "shatura", "sosnovka", "muravlenko", "uglich", "nalchik", "buynaksk", "gvardeysk", "roslavl",
      "vyborg", "birobidzhan", "magadan", "elektrostal", "ipatovo", "likhoslavl", "kataysk", "zainsk", "kstovo", "udomlya",
      "bogorodsk", "grayvoron", "skovorodino", "verkhnyaya_tura", "gus_khrustalny", "kuznetsk", "rylsk", "volokolamsk", "nikolayevsk_on_amur", "shenkursk",
      "zheleznodorozhny", "soltsy", "krasnoye_selo", "vilyuchinsk", "korkino", "topki", "pervouralsk", "tashtagol", "astrakhan", "snezhinsk",
      "sasovo", "vorsma", "safonovo", "protvino", "yasny", "cheboksary", "prokhladny", "tobolsk", "krasny_kut", "medyn",
      "makushino", "zakamensk", "novoulyanovsk", "plast", "lomonosov", "peresvet", "abdulino", "opochka", "dalnegorsk", "maykop",
      "lyubim", "nolinsk", "taganrog", "bolgar", "noginsk", "stupino", "konstantinovsk", "rostov", "cherkessk", "artyom",
      "minusinsk", "sortavala", "znamensk", "krasnokamensk", "demidov", "bely", "shumerlya", "petropavlovsk_kamchatsky", "murmansk", "ust_kut",
      "adygeysk", "kamenka", "kedrovy", "leninsk", "zmeinogorsk", "ulyanovsk", "yelizovo", "serdobsk", "verkhoturye", "nizhny_novgorod",
      "chulym", "novosibirsk", "vyazma", "valday", "stroitel", "asino", "oktyabrsk", "kotovsk", "alexandrovsk", "volsk",
      "artyomovsk", "nizhniye_sergi", "novokubansk", "neftekumsk", "lesosibirsk", "sayanogorsk", "gryazi", "nazran", "nevinnomyssk", "yakhroma",
      "sosnovy_bor", "snezhnogorsk", "blagodarny", "golitsyno", "staraya_kupavna", "samara", "svirsk", "timashyovsk", "chusovoy", "ust_dzheguta",
      "valuyki", "shimanovsk", "livny", "dobryanka", "mikhaylovka", "zarinsk", "ishimbay", "vladivostok", "beslan", "rybnoye",
      "kireyevsk", "balashov", "iskitim", "volodarsk", "shakhtyorsk", "novoaltaysk", "kadnikov", "skopin", "novocherkassk", "khanty_mansiysk",
      "chadan", "krasavino", "kondopoga", "dalnerechensk", "sosnogorsk", "okhansk", "nazyvayevsk", "velsk", "meleuz", "yekaterinburg",
      "atkarsk", "tyumen", "labytnangi", "tolyatti", "seltso", "slavgorod", "taldom", "lyantor", "yegoryevsk", "elektrougli",
      "kamennogorsk", "nytva", "syzran", "petrov_val", "tommot", "kologriv", "belorechensk", "teykovo", "derbent", "zhirnovsk",
      "kem", "kholmsk", "zheleznogorsk_ilimsky", "baley", "trubchevsk", "malaya_vishera", "zaozyorsk", "reutov", "dyurtyuli", "lipetsk",
      "srednekolymsk", "tynda", "krasnouralsk", "pyt_yakh", "pskov", "kirishi", "ruzayevka", "chaplygin", "likino_dulyovo", "izobilny",
      "aksay", "novorossiysk", "zvenigorod", "malgobek", "novosil", "fokino", "belyov", "pokrovsk", "severomorsk", "belousovo",
      "shakhunya", "slavsk", "myshkin", "gavrilov_posad", "spassk_dalny", "kizilyurt", "shumikha", "karabulak", "vyazemsky", "verkhneuralsk",
      "barabinsk", "kozelsk", "kamensk_shakhtinsky", "belomorsk", "berezovsky", "volkhov", "tulun", "svetogorsk", "staritsa", "nevelsk",
      "klimovsk", "knyaginino", "slantsy", "tyrnyauz", "grozny", "yuzhnouralsk", "babayevo", "sudogda", "volchansk", "krasny_sulin",
      "michurinsk", "tomari", "ertil", "buinsk", "vetluga", "biysk", "segezha", "bolokhovo", "dubovka", "lesnoy",
      "kamyshin", "kirovgrad", "bavly", "arkhangelsk", "sychyovka", "volzhsky", "karpinsk", "krasnogorsk", "severo_kurilsk", "tuapse",
      "marks", "agryz", "zelenogradsk", "yasnogorsk", "kinel", "tosno", "toropets", "kogalym", "yanaul", "gay",
      "ivdel", "biryusinsk", "izberbash", "khadyzhensk", "chekalin", "kovylkino", "salsk", "lytkarino", "degtyarsk", "igarka",
      "sorsk", "novomoskovsk", "vyatskiye_polyany", "kotelnich", "cherepanovo", "osa", "chapayevsk", "bezhetsk", "yuzhno_sakhalinsk", "tetyushi",
      "spassk", "yermolino", "aramil", "karachayevsk", "bagrationovsk", "makaryev", "polessk", "aniva", "belozersk", "yelabuga",
      "ostrovnoy", "petergof", "cheremkhovo", "zavolzhye", "kotelniki", "rasskazovo", "nyagan", "udachny", "mamonovo", "puchezh",
      "kovrov", "uvarovo", "voskresensk", "lipki", "nizhny_tagil", "surgut", "lobnya", "miass", "beloyarsky", "kalachinsk",
      "lyuban", "navashino", "borzya", "buturlinovka", "zelenogorsk", "ivangorod", "chekhov", "izhevsk", "bodaybo", "kizel",
      "usolye_sibirskoye", "seversk", "nerekhta", "kurganinsk", "uzhur", "belaya_kalitva", "saransk", "petrozavodsk", "armavir", "yaransk",
      "elista", "yuzha", "dimitrovgrad", "naberezhnye_chelny", "proletarsk", "shatsk", "bolshoy_kamen", "yurga", "stary_oskol", "kokhma",
      "oboyan", "mednogorsk", "leninsk_kuznetsky", "tayga", "kropotkin", "bikin", "kambarka", "yoshkar_ola", "gelendzhik", "vuktyl",
      "murino", "zlynka", "kalach", "minyar", "kalach_na_donu", "millerovo", "danilov", "mineralnye_vody", "rudnya", "bologoye",
      "birsk", "voronezh", "syktyvkar", "gukovo", "insar", "luza", "kurtamysh", "fryazino", "nerchinsk", "ivanovo",
      "mosalsk", "toguchin", "gorno_altaysk", "maloarkhangelsk", "yeysk", "barysh", "dmitriyev", "nefteyugansk", "polysayevo", "kimovsk",
      "kyshtym", "krasnodar", "beloretsk", "bronnitsy", "vilyuysk", "amursk", "abakan", "vyazniki", "mezen", "armiansk",
      "okha", "aznakayevo", "korocha", "yaroslavl", "chelyabinsk", "petushki", "balakovo", "ostrogozhsk", "kursk", "sorochinsk",
      "belebey", "magas", "chkalovsk", "krasny_kholm", "primorsk", "nevyansk", "istra", "korablino", "noyabrsk", "vysokovsk",
      "ochyor", "zhukovka", "kyzyl", "biryuch", "satka", "semyonov", "buguruslan", "bugulma", "raduzhny", "kostomuksha",
      "kalyazin", "mendeleyevsk", "katav_ivanovsk", "krasnoarmeysk", "apatity", "shebekino", "shchuchye", "novovoronezh", "chernushka", "partizansk",
      "navoloki", "gryazovets", "verkhny_ufaley", "zavodoukovsk", "surazh", "khabarovsk", "sibay", "rtishchevo", "pavlovsky_posad", "sretensk",
      "anzhero_sudzhensk", "khvalynsk", "tsimlyansk", "unecha", "nyazepetrovsk", "kurchatov", "shilka", "galich", "omutninsk", "novoanninsky",
      "glazov", "bogdanovich", "pushkin", "yershov", "buy", "bolotnoye", "shchyolkovo", "andreapol", "kaluga", "pokachi",
      "kurilsk", "otradnoye", "ryazhsk", "petrovsk_zabaykalsky", "magnitogorsk", "asha", "pokrov", "spas_klepiki", "bogoroditsk", "pervomaysk",
      "baykalsk", "sergiyev_posad", "usolye", "sochi", "boguchar", "uren", "tatarsk", "khimki", "domodedovo", "kuvshinovo",
      "svetlogorsk", "belinsky", "neman", "strunino", "kolchugino", "aprelevka", "donetsk", "manturovo", "shuya", "tambov",
      "roshal", "yemanzhelinsk", "kargopol", "kommunar", "engels", "krymsk", "losino_petrovsky", "vereshchagino", "volzhsk", "gornyak",
      "temnikov", "bakal", "kostroma", "gagarin", "stavropol", "inza", "zapadnaya_dvina", "dubna", "turan", "monchegorsk",
      "anapa", "lgov", "kamyshlov", "lakinsk", "novoalexandrovsk", "kudymkar", "nakhodka", "poronaysk", "verkhny_tagil", "kazan",
      "totma", "alatyr", "lermontov", "kansk", "sayansk", "olenegorsk", "kondrovo", "murom", "mikun", "guryevsk",
      "pavlovsk", "sredneuralsk", "lukoyanov", "mglin", "sukhoy_log", "sokolniki", "shikhany", "suzdal", "dorogobuzh", "makarov",
      "volosovo", "rezh", "ust_ilimsk", "kashira", "okulovka", "zarechny", "fatezh", "veliky_novgorod", "alexandrovsk_sakhalinsky", "shcherbinka",
      "novouzensk", "arsenyev", "budyonnovsk", "myski", "megion", "zapolyarny", "pereslavl_zalessky", "rossosh", "chegem", "krasnoyarsk",
      "balashikha", "novy_oskol", "kasimov", "mariinsk", "novokuznetsk", "novaya_ladoga", "kushva", "sarapul", "sol_iletsk", "tsivilsk",
      "innopolis", "anadyr", "pechory", "omsk", "nyurba", "neftegorsk", "dolinsk", "belokurikha", "plyos", "saint_petersburg",
      "mytishchi", "kemerovo", "lukhovitsy", "kimry", "bolkhov", "menzelinsk", "arsk", "yelets", "yadrin", "krasnoznamensk",
      "gatchina", "penza", "labinsk", "torzhok", "ob", "dedovsk", "tikhvin", "krasnozavodsk", "babushkin", "vesyegonsk",
      "ostrov", "solikamsk", "divnogorsk", "chernyakhovsk", "almetyevsk", "suvorov", "gulkevichi", "apsheronsk", "saratov", "komsomolsk_on_amur",
      "sovetsk", "podporozhye", "kusa", "yuryev_polsky", "ozyorsk", "donskoy", "norilsk", "vikhorevka", "yarovoye", "bratsk",
      "alapayevsk", "neftekamsk", "gremyachinsk", "cherdyn", "borovichi", "langepas", "lakhdenpokhya", "meshchovsk", "polyarny", "serafimovich",
      "kiselyovsk", "perevoz", "kirs", "mozhaysk", "bor", "khilok", "gorodovikovsk", "ardatov", "pyatigorsk", "lebedyan",
      "gubkinsky", "leninogorsk", "lesozavodsk", "gubakha", "mezhgorye", "elektrogorsk", "borovsk", "nadym", "shchigry", "pitkyaranta",
      "novy_urengoy", "kozmodemyansk", "kalininsk", "sysert", "ramenskoye", "aldan", "kulebaki", "kotelnikovo", "kislovodsk", "borisoglebsk",
      "ardon", "zlatoust", "vyshny_volochyok", "vsevolozhsk", "zaozyorny", "mikhaylov", "gdov", "tryokhgorny", "akhtubinsk", "orlov",
      "ufa", "solvychegodsk", "kotovo", "vladikavkaz", "nizhnekamsk", "achinsk", "yartsevo", "kungur", "pavlovo", "nizhnyaya_tura",
      "liski", "susuman", "narimanov", "gornozavodsk", "alexandrov", "yugorsk", "sestroretsk", "obninsk", "dalmatovo", "rostov_on_don",
      "dudinka", "kuybyshev", "georgiyevsk", "mariinsky_posad", "sterlitamak", "naro_fominsk", "dyatkovo", "lysva", "gudermes", "yalutorovsk",
      "urzhum", "zubtsov", "teberda", "solnechnogorsk", "alupka", "tver", "rubtsovsk", "volgorechensk", "chistopol", "gavrilov_yam",
      "obluchye", "semikarakorsk", "lodeynoye_pole", "zhizdra", "novaya_lyalya", "sovetsky", "otradny", "sharya", "kameshkovo", "suoyarvi",
      "soligalich", "abaza", "morshansk", "kovdor", "urus_martan", "ozherelye", "kurovskoye", "kupino", "irkutsk", "shchyokino",
      "ivanteyevka", "chyormoz", "kharabali", "alexeyevka", "novouralsk", "pallasovka", "bataysk", "ussuriysk", "chita", "koryazhma",
      "novokuybyshevsk", "krasnoturyinsk", "petrovsk", "yeniseysk", "dzerzhinsk", "pravdinsk", "naukan", "pustoshka", "frolovo", "kodinsk",
      "dolgoprudny", "kola", "yuzhno_sukhokumsk", "boksitogorsk", "sosensky", "vichuga", "kirillov", "bobrov", "korolyov", "oryol",
      "krasnoufimsk", "novoshakhtinsk", "kashin", "troitsk", "chernogolovka", "velizh", "zelenokumsk", "maloyaroslavets", "osinniki", "orekhovo_zuyevo",
      "malmyzh", "ryazan", "slyudyanka", "temryuk", "isilkul", "severodvinsk", "azov", "zuyevka", "uryupinsk", "syasstroy",
      "zherdevka", "sebezh", "pokhvistnevo", "vladimir", "zheleznovodsk", "orsk", "krasnoslobodsk", "zheleznogorsk", "nazarovo", "karabanovo",
      "staraya_russa", "chudovo", "blagoveshchensk", "usinsk", "gorodishche", "pochep", "uzlovaya", "kurgan", "mogocha", "samara_oblast",
      "shlisselburg", "inta", "vologda", "lagan", "bogotol", "spas_demensk", "cherepovets", "kolomna", "pushkino", "vysotsk",
      "novopavlovsk", "gubkin", "gorokhovets", "vytegra", "ruza", "gusinoozyorsk", "novorzhev", "sengiley", "kachkanar", "belaya_kholunitsa",
      "polevskoy", "sarov", "bilibino", "borodino", "nurlat", "nizhneudinsk", "krasnokamsk", "surovikino", "kartaly", "belogorsk",
      "gorbatov", "kamen_na_obi", "nartkala", "medvezhyegorsk", "kingisepp", "sosnovoborsk", "maysky", "karabash", "kirzhach", "slavyansk_na_kubani",
      "arkadak", "artyomovsky", "irbit", "zavolzhsk", "raychikhinsk", "zhukovsky", "aleysk", "kaltan", "nizhny_lomov", "konakovo",
      "veliky_ustyug", "nelidovo", "dmitrovsk", "ak_dovurak", "pestovo"
    ];
    return words;
  }
}

// let objEn = new TopicWordEn();
// console.log("en");
// console.log(objEn.topicPokemonsEn().length);
