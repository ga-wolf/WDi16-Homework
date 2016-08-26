# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

################################
Race.destroy_all

terran = Race.create({
    :name => 'Terran',
    :image => '/assets/terran.png',
    :homeworld => 'Korhal',
    :description => "The Terrans are the most splintered of the races, consisting of multiple factions that not only fight the other races but each other as well. Considered an adaptive and mobile species, the Terrans are noted for their ability to quickly access and drain a planet's resources. The Terrans are defined by their specialization of units and tactics of defense and mobility. Terrans are usually being caught in-between the conflict between the Protoss and Zerg while also dealing with frequent civil wars.",
    :leader => 'Jim Raynor'
})

protoss = Race.create({
    :name => 'Protoss',
    :image => '/assets/protoss.png',
    :homeworld => 'Aiur',
    :description => 'The Protoss are composed of two societies, the conservative Khalai Protoss and the exiled dark templar. The Protoss are depicted as a physically strong species with access to advanced psionic abilities. The Protoss are considered the most technologically advanced race of the three. Originating from Aiur, a planet on the fringe of the galaxy, the Protoss are the nemesis of the Zerg.',
    :leader => 'Artanis'
})

zerg = Race.create({
    :name => 'Zerg',
    :image => '/assets/zerg.png',
    :homeworld => 'Char',
    :description => "The Zerg Swarm is a race of xenomorphic 'hyper-evolutionary' superorganisms. Unlike the Protoss and the Terrans, the Zerg are not 'tool-makers', lacking technological inclination; instead, they 'force-evolve' genetic traits by directed mutation in order to match such technology. Operating as a hive mind-linked 'chain of command', the Zerg strive for genetic perfection by assimilating the unique genetic adaptations of 'worthy' races into their own, creating numerous different strains of Zerg. Despite being notoriously cunning and ruthlessly efficient, the majority of Zerg species have low intelligence; becoming mindless beasts if not connected to a 'hive-cluster' or a 'command entity'.",
    :leader => 'Sarah Kerrigan'
})

puts "\n #{Rainbow("Race test".ljust(40,'.')).bg(:red)}"
p "Race count #{Race.all.count}"
p "Protoss leader is #{protoss.leader}"
p "Zerg homeworld is #{zerg.homeworld}"
p "Terran name is #{terran.name}"

##################################
Unit.destroy_all
zergling = Unit.create :name => "Zergling", :image => "http://cdn.mos.cms.futurecdn.net/724b8bd9f392d21d3c4b3ae736491fe5-1200-80.jpg"
hydralisk = Unit.create :name => "Hydralisk", :image => "http://orig14.deviantart.net/f36b/f/2013/091/2/0/hydralisk_ii_by_mr__jack-d1v8ysl.jpg"
zealot = Unit.create :name => "Zealot", :image => "https://upload.wikimedia.org/wikipedia/en/8/8f/Zealot_(StarCraft).png"
dragoon = Unit.create :name => "Dragoon", :image => "https://s-media-cache-ak0.pinimg.com/564x/d6/c4/e3/d6c4e35df56ad37bb7f3972239a96cb1.jpg"
marine = Unit.create :name => "Marine", :image => "http://vignette3.wikia.nocookie.net/starcraft/images/2/2c/Marine_SC2_Art5.jpg/revision/latest?cb=20140601010142"
firebat = Unit.create :name => "Firebat", :image => "http://vignette2.wikia.nocookie.net/starcraft/images/6/6a/Firebat_SC1_Cncpt1.jpg/revision/latest?cb=20080312224851"

puts "\n #{Rainbow("Unit test".ljust(40,'.')).bg(:green).black}"
p "Unit count #{Unit.all.count}"

p "Zergling name is #{zergling.name}"
p "Hydralisk name is #{hydralisk.name}"
p "Zealot name is #{zealot.name}"
p "Dragoon name is #{dragoon.name}"
p "Marine name is #{marine.name}"
p "Firebat name is #{firebat.name}"

puts "\n #{"Unit append to Race".ljust(40,'.')}"
protoss.units << zealot
protoss.units << dragoon
zerg.units << zergling
zerg.units << hydralisk
terran.units << marine
terran.units << firebat
p "Protoss has #{protoss.units.count} units."
p "Zerg has #{zerg.units.count} units."
p "Terran has #{terran.units.count} units."

####################################
Weapon.destroy_all
melee = Weapon.create :name => "Melee"
range = Weapon.create :name => "Range"
plasma = Weapon.create :name => "Plasma"

puts "\n #{Rainbow("Weapon test".ljust(40,'.')).bg(:blue)}"
p "Weapon count #{Weapon.all.count}"
p "Melee is assigned to #{melee.name}"
p "Range is assigned to #{range.name}"
p "Plasma is assigned to #{plasma.name}"

puts "\n #{"Unit append to Weapon".ljust(40,'.')}"
melee.units << zergling
melee.units << zealot
range.units << hydralisk
range.units << marine
range.units << firebat
plasma.units << dragoon
p "Range has #{range.units.count} units."
p "Melee has #{melee.units.count} units."
p "Plasma has #{plasma.units.count} units."

##################################
Character.destroy_all
jim = Character.create({
  :name => "Jim Raynor",
  :image => "http://vignette4.wikia.nocookie.net/starcraft/images/a/ad/JimRaynor_SC2_Head2.jpg/revision/latest/scale-to-width-down/254?cb=20151129213613",
  :background => "Jim Raynor is a former terran marshal turned rebel, who has became one of the major figures in the Koprulu sector through his work to bring down the Confederacy and, later, in the struggle against the Confederacy's successor, the Dominion. Raynor is one of the few terrans to engage in a long-term alliance with the protoss."
})

sarah = Character.create({
  :name => "Sarah Kerrigan",
  :image => "http://vignette1.wikia.nocookie.net/starcraft/images/b/b6/InfestedKerrigan_SC2_Art4.jpg/revision/latest/scale-to-width-down/225?cb=20101218020657",
  :background => "Sarah Kerrigan was a psychic terran female. She began her career as a Confederate ghost and later became the second-in-command of the Sons of Korhal. Following Arcturus Mengsk's betrayal, she was captured and infested by the Zerg Swarm, ultimately becoming the self-proclaimed Queen of Blades (a.k.a. the Zerg Queen) and leader of the Swarm"
})

zeratul = Character.create({
  :name => "Zeratul",
  :image => "http://vignette4.wikia.nocookie.net/p__/images/d/d8/Zeratul_by_tokoldi-d5mewb3.jpg/revision/latest?cb=20151116062447&path-prefix=protagonist",
  :background => "During the Great War, Zeratul allied with the Khalai Tassadar, despite his hatred for the Conclave that once banished his forbears. The Dark Templar personally slew the cerebrate Zasz, but in turn accidentally gave the Overmind the location of Aiur. Zeratul was manipulated by Sarah Kerrigan during the Brood War into killing the Second Overmind and Raszagal, the Dark Templar Matriarch"
})

puts "\n #{Rainbow("Character test".ljust(40,'.')).bg(:purple)}"
p "Character count #{Character.all.count}"
p "Zeratul name is #{zeratul.name}"
p "Jim name is #{jim.name}"
p "Sarah name is #{sarah.name}"

puts "\n #{"Character append to Race and Weapon".ljust(40,'.')}"
terran.characters << jim
range.characters << jim
protoss.characters << zeratul
plasma.characters << zeratul
zerg.characters << sarah
melee.characters << sarah

p "Terran characters include: #{terran.characters.all.first.name}"
p "Protoss characters include: #{protoss.characters.all.first.name}"
p "Zerg characters include: #{zerg.characters.all.first.name}"
puts "\n"
p "Melee characters include: #{melee.characters.all.first.name}"
p "Range characters include: #{range.characters.all.first.name}"
p "Plasma characters include: #{plasma.characters.all.first.name}"


##################################
puts "\n#{Rainbow("Homeworld test".ljust(40,'.')).bg(:chartreuse).black}"

Homeworld.destroy_all
aiur = Homeworld.create({
  :name => "Aiur",
  :background => "Homeworld of the Protoss and invaded by Zerg"
})
char = Homeworld.create({
  :name => "Char",
  :background => "Homeworld of the Zerg"
})
korhal = Homeworld.create({
  :name => "Korhal",
  :background => "Homeworld of the Terran and invaded by Zerg"
})
puts "Homeworld's seeded include #{Homeworld.all.pluck(:name)}"

puts "\n#{"Append Races to Homeworlds".ljust(40,'.')}"
aiur.races << protoss << zerg
char.races << zerg
korhal.races << terran << zerg

puts "Aiur homeworld includes races of #{aiur.races.pluck(:name)}"
puts "Char homeworld includes races of #{char.races.pluck(:name)}"
puts "Korhal homeworld includes races of #{korhal.races.pluck(:name)}"

puts "\nZerg homeworlds include: #{zerg.homeworlds.pluck(:name)}"
puts "Protoss homeworlds include: #{protoss.homeworlds.pluck(:name)}"
puts "Terran homeworlds include: #{terran.homeworlds.pluck(:name)}"


####################################
puts "\n #{Rainbow("Has many through relationship".ljust(40,'.')).bg(:yellow).black}"

p "Protoss has #{protoss.weapons.count} weapons"
p "Zerg has #{zerg.weapons.count} weapons"
p "Terran has #{terran.weapons.count} weapons"
puts "\n"
p "Range weapons are used by #{range.races.count} races"
p "Melee weapons are used by #{melee.races.count} races"
p "Plasma weapons are used by #{plasma.races.count} races"

####################################
puts "\n #{Rainbow("Has many and belongs to many".ljust(40,'.')).bg(:hotpink).black}"
