// NOTE: Due to the stateless nature of the system, once these lists are
// published, one must be extremely cautious about updating them. Ideally,
// every single change should be a new version, but at minimum, it is
// impossible for items to be removed from a list, and a list may only be
// appended to, not re-arranged. The index of the lists in the outermost
// array cannot be changed or deleted, only added to.

/* Here is a sample inventory list, though you have to replace the spaces
with tabs.

Item 1  74  Mineral 0,74 m2 2 497,50 ISK
Item 2  286 Mineral 2,86 m3 21 836,10 ISK
*/

module.exports = [
  {
    "name": "Ore List v1",
    "list": [
      "Veldspar", "Concentrated Veldspar", "Dense Veldspar", "Stable Veldspar",
      "Scordite", "Condensed Scordite", "Massive Scordite", "Glossy Scordite",
      "Pyroxeres", "Solid Pyroxeres", "Viscous Pyroxeres", "Opulent Pyroxeres",
      "Plagioclase", "Azure Plagioclase", "Rich Plagioclase", "Sparkling Plagioclase",
      "Omber", "Silvery Omber", "Golden Omber", "Platinoid Omber",
      "Kernite", "Luminous Kernite", "Fiery Kernite", "Resplendant Kernite",
      "Jaspet", "Pure Jaspet", "Pristine Jaspet", "Immaculate Jaspet",
      "Hemorphite", "Vivid Hemorphite", "Radiant Hemorphite", "Scintillating Hemorphite",
      "Hedbergite", "Vitric Hedbergite", "Glazed Hedbergite", "Lustrous Hedbergite",
      "Gneiss", "Iridescent Gneiss", "Prismatic Gneiss", "Brilliant Gneiss",
      "Dark Ochre", "Onyx Ochre", "Obsidian Ochre", "Jet Ochre",
      "Spodumain", "Bright Spodumain", "Gleaming Spodumain", "Dazzling Spodumain",
      "Crokite", "Sharp Crokite", "Crystalline Crokite", "Pellucid Crokite",
      "Bistot", "Triclinic Bistot", "Monoclinic Bistot", "Cubic Bistot",
      "Arkonor", "Crimson Arkonor", "Prime Arkonor", "Flawless Arkonor",
      "Mercoxit", "Magma Mercoxit", "Vitreous Mercoxit",
      "Clear Icicle", "White Glaze", "Blue Ice", "Glacial Mass",
      "Enriched Clear Icicle", "Pristine White Glaze", "Thick Blue Ice", "Smooth Glacial Mass",
      "Glare Crust", "Dark Glitter", "Gelidus", "Krystallos",
      "Bitumens", "Brimful Bitumens", "Glistening Bitumens",
      "Coesite", "Brimful Coesite", "Glistening Coesite",
      "Sylvite", "Brimful Sylvite", "Glistening Sylvite",
      "Zeolites", "Brimful Zeolites", "Glistening Zeolites",
      "Cobaltite", "Copious Cobaltite", "Twinkling Cobaltite",
      "Euxenite", "Copius Euxenite", "Twinkling Euxenite",
      "Scheelite", "Copious Scheelite", "Twinkling Scheelite",
      "Titanite", "Copious Titanite", "Twinkling Titanite",
      "Chromite", "Lavish Chromite", "Shimmering Chromite",
      "Otavite", "Lavish Otavite", "Shimmering Otavite",
      "Sperrylite", "Lavish Sperrylite", "Shimmering Sperrylite",
      "Vanadinite", "Lavish Vanadinite", "Shimmering Vanadinite",
      "Carnotite", "Replete Carnotite", "Glowing Carnotite",
      "Cinnabar", "Replete Cinnabar", "Glowing Cinnabar",
      "Pollucite", "Replete Pollucite", "Glowing Pollucite",
      "Zircon", "Replete Zircon", "Glowing Zircon",
      "Loparite", "Bountiful Loparite", "Shining Loparite",
      "Monazite", "Bountiful Monazite", "Shining Monazite",
      "Xenotime", "Bountiful Xenotime", "Shining Xenotime",
      "Ytterbite", "Bountiful Ytterbite", "Shining Ytterbite"
    ]
  },
  {
    "name": "PI Item List v1",
    "list": [
      "Aqueous Liquids", "Heavy Metals", "Felsic Magma", "Base Metals", "Complex Organisms", "Noble Metals",
      "Suspended Plasma", "Noble Gas", "Reactive Gas", "Autotrophs", "Ionic Solutions", "Non-CS Crystals",
      "Planktic Colonies", "Carbon Compounds", "Micro Organisms",
      "Water", "Toxic Metals", "Silicon", "Reactive Metals", "Proteins", "Precious Metals", "Plasmoids",
      "Oxygen", "Oxidizing Compound", "Industrial Fibers", "Electrolytes", "Chiral Structures",
      "Biomass", "Biofuels", "Bacteria",
      "Water-Cooled CPU", "Viral Agent", "Transmitter", "Test Cultures", "Synthetic Oil", "Supertensile Plastics",
      "Superconductors", "Silicate Glass", "Rocket Fuel", "Polytextiles", "Polyaramids", "Oxides", "Nanites",
      "Miniature Electronics", "Microfiber Shielding", "Mechanical Parts", "Livestock", "Genetically Enhanced Livestock",
      "Fertilizer", "Enriched Uranium", "Consumer Electronics", "Construction Blocks", "Biocells",
      "Supercomputers", "Cryoprotectant Solution", "Biotech Research Reports", "Planetary Vehicles", 
      "Hazmat Detection Systems", "Gel-Matrix Biopaste", "Vaccines", "Ukomi Super Conductors",
      "Transcranial Microcontrollers", "Synthetic Synapses", "Smartfab Units", "Robotics", "Nuclear Reactors",
      "Neocoms", "Industrial Explosives", "High-Tech Transmitters", "Hermetic Membranes", "Guidance Systems",
      "Data Chips", "Condensates", "Camera Drones",
      "Broadcast Node", "Integrity Response Drones", "Nano-Factory", "Organic Mortar Applicators",
      "Recursive Computing Module", "Self-Harmonizing Power Core", "Sterile Conduits", "Wetware Mainframe"
    ]
  }
]
