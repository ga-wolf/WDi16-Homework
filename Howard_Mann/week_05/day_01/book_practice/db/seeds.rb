# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Book.destroy_all

book1 = Book.create({
  :title => "The Fifth Knight",
  :author => "E.M. Powell",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/510mWTzrErL.jpg",
  :price => 19.99,
  :description => "To escape a lifetime of poverty, mercenary Sir Benedict Palmer agrees to one final, lucrative job: help King Henry II’s knights seize the traitor Archbishop Thomas Becket at Canterbury Cathedral. But what begins as a clandestine arrest ends in cold-blooded murder. "
})

book2 = Book.create({
  :title => "Truly Madly Guilty",
  :author => "Liane Moriarty",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/518ec-hoKML.jpg",
  :price => 12.00,
  :description => "Clementine is haunted by regret. It was just a barbeque. They didn't even know their hosts that well, they were friends of friends. They could so easily have said no."
})

book3 = Book.create({
  :title => "The Woman from Krakow",
  :author => "Alex Rosenberg",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/5105063cO-L._SY346_.jpg",
  :price => 19.99,
  :description => "It’s 1935. Rita Feuerstahl comes to the university in Krakow intent on enjoying her freedom. But life has other things in store—marriage, a love affair, a child, all in the shadows of the oncoming war. When the war arrives, Rita is armed with a secret so enormous that it could cost the Allies everything."
})

book4 = Book.create({
  :title => "The Last Citadel ",
  :author => "K. M. Ashman",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/51YuqotaRFL.jpg",
  :price => 10.00,
  :description => "A solitary fortress isolated in an endless sea. A city of secrets where the elite dominate with an iron fist and ambition ends at the city walls. "
})

book5 = Book.create({
  :title => "Taunting the Dead",
  :author => "Mel Sherratt",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/51AiG3sjNdL.jpg",
  :price => 19.99,
  :description => "How far would you go to protect the ones you love? And how much further would you go to betray them? Nine out of ten murders are committed by someone the victim knows. So when Steph Ryder has her head bashed in within earshot of her family and friends, DS Allie Shenton begins her investigation close to home."
})

book6 = Book.create({
  :title => "My Girl",
  :author => "Jack Jordan",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/51op6MFRUVL.jpg",
  :price => 19.99,
  :description => "Paige Dawson: the mother of a murdered child and wife to a dead man. She has nothing left to live for… until she finds her husband’s handgun hidden in their house. Why did Ryan need a gun? What did he know about their daughter’s death? Desperate for the truth, Paige begins to unearth her husband’s secrets."
})

book7 = Book.create({
  :title => "Harry Potter and the Cursed Child",
  :author => "J.K. Rowling",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/615s-d3gm7L._SY346_.jpg",
  :price => 19.99,
  :description => "Based on an original new story by J.K. Rowling, John Tiffany and Jack Thorne, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016."
})

book8 = Book.create({
  :title => "Behind Dead Eyes",
  :author => "Howard Linskey",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/51EwEl4ZrPL.jpg",
  :price => 19.99,
  :description => "A corpse is found: its identity extinguished in the most shocking manner imaginable. Detective Ian Bradshaw can't catch the killer if no one can ID the victim. Out there, somewhere, a missing young woman may hold the answers."
})

book9 = Book.create({
  :title => "The Girl on the Train",
  :author => "Paula Hawkins",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/51YcAccsNyL.jpg",
  :price => 19.99,
  :description => "Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. ‘Jess and Jason’, she calls them. Their life – as she sees it – is perfect. If only Rachel could be that happy."
})

book10 = Book.create({
  :title => "The Misremembered Man",
  :author => "Christina McKenna",
  :cover => "https://images-fe.ssl-images-amazon.com/images/I/51wbXTF0DhL._SY346_.jpg",
  :price => 19.99,
  :description => "The Misremembered Man is a beautifully rendered portrait of life in rural Ireland which charms and delights with its authentic characters and gentle humor. This vivid portrayal of the universal search for love brings with it a darker tale, heartbreaking in its poignancy."
})
