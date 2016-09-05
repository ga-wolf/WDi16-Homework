# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#  name        :string
#  image       :string
#  homeworld   :string
#  description :string
#  leader      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

Race.destroy_all

terran = Race.create({
    :name => 'Terran',
    :image => 'https://upload.wikimedia.org/wikipedia/en/f/fd/Tychus_Findlay_%28StarCraft%29.png',
    :homeworld => 'Korhal',
    :description => "The Terrans are the most splintered of the races, consisting of multiple factions that not only fight the other races but each other as well. Considered an adaptive and mobile species, the Terrans are noted for their ability to quickly access and drain a planet's resources. The Terrans are defined by their specialization of units and tactics of defense and mobility. Terrans are usually being caught in-between the conflict between the Protoss and Zerg while also dealing with frequent civil wars.",
    :leader => 'Jim Raynor'
})

protoss = Race.create({
    :name => 'Protoss',
    :image => 'https://upload.wikimedia.org/wikipedia/en/8/8f/Zealot_%28StarCraft%29.png',
    :homeworld => 'Aiur',
    :description => 'The Protoss are composed of two societies, the conservative Khalai Protoss and the exiled dark templar. The Protoss are depicted as a physically strong species with access to advanced psionic abilities. The Protoss are considered the most technologically advanced race of the three. Originating from Aiur, a planet on the fringe of the galaxy, the Protoss are the nemesis of the Zerg.',
    :leader => 'Artanis'
})

zerg = Race.create({
    :name => 'Zerg',
    :image => 'https://upload.wikimedia.org/wikipedia/en/b/be/Hydralisk_%28StarCraft%29.png',
    :homeworld => 'Char',
    :description => "The Zerg Swarm is a race of xenomorphic 'hyper-evolutionary' superorganisms. Unlike the Protoss and the Terrans, the Zerg are not 'tool-makers', lacking technological inclination; instead, they 'force-evolve' genetic traits by directed mutation in order to match such technology. Operating as a hive mind-linked 'chain of command', the Zerg strive for genetic perfection by assimilating the unique genetic adaptations of 'worthy' races into their own, creating numerous different strains of Zerg. Despite being notoriously cunning and ruthlessly efficient, the majority of Zerg species have low intelligence; becoming mindless beasts if not connected to a 'hive-cluster' or a 'command entity'.",
    :leader => 'Sarah Kerrigan'
})

Hero.destroy_all

jim = Hero.create({
  :name => "Jim Raynor",
  :image => "http://vignette4.wikia.nocookie.net/starcraft/images/a/ad/JimRaynor_SC2_Head2.jpg/revision/latest/scale-to-width-down/254?cb=20151129213613",
  :background => "Jim Raynor is a former terran marshal turned rebel, who has became one of the major figures in the Koprulu sector through his work to bring down the Confederacy and, later, in the struggle against the Confederacy's successor, the Dominion. Raynor is one of the few terrans to engage in a long-term alliance with the protoss."
})

sarah = Hero.create({
  :name => "Sarah Kerrigan",
  :image => "http://vignette1.wikia.nocookie.net/starcraft/images/b/b6/InfestedKerrigan_SC2_Art4.jpg/revision/latest/scale-to-width-down/225?cb=20101218020657",
  :background => "Sarah Kerrigan was a psychic terran female. She began her career as a Confederate ghost and later became the second-in-command of the Sons of Korhal. Following Arcturus Mengsk's betrayal, she was captured and infested by the Zerg Swarm, ultimately becoming the self-proclaimed Queen of Blades (a.k.a. the Zerg Queen) and leader of the Swarm"
})

zeratul = Hero.create({
  :name => "Zeratul",
  :image => "http://vignette4.wikia.nocookie.net/p__/images/d/d8/Zeratul_by_tokoldi-d5mewb3.jpg/revision/latest?cb=20151116062447&path-prefix=protagonist",
  :background => "During the Great War, Zeratul allied with the Khalai Tassadar, despite his hatred for the Conclave that once banished his forbears. The Dark Templar personally slew the cerebrate Zasz, but in turn accidentally gave the Overmind the location of Aiur. Zeratul was manipulated by Sarah Kerrigan during the Brood War into killing the Second Overmind and Raszagal, the Dark Templar Matriarch"
})
