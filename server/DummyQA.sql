-- build the Q nad A Dummpy database
drop table users;
drop table comments;
drop table questions;

CREATE TABLE users (
    id 		SERIAL PRIMARY KEY,
    firstname           VARCHAR(30) NOT NULL,
    lastname           VARCHAR(30),
    email 	VARCHAR(120) NOT NULL,
    pass  VARCHAR(120) NOT NULL
);

CREATE TABLE questions (
  id 		SERIAL PRIMARY KEY,
  -- user_id INTEGER,
  title VARCHAR(150) NOT NULL,
  context VARCHAR(300) NOT NULL,	
  question_date timestamp default current_timestamp
  -- foreign key (user_id) references users(id)
);

CREATE TABLE comments (
  id serial PRIMARY key,
  -- user_id INTEGER,
  question_id INTEGER,
  comment VARCHAR(300) NOT NULL,
  comment_date timestamp default current_timestamp,
  foreign key (question_id) references questions(id)
);

insert into users (firstname, lastname, email, pass) values ('Ekaterina', 'Ilyin', 'eilyin0@phoca.cz', 'Seamless');
insert into users (firstname, lastname, email, pass) values ('Arlan', 'Lestor', 'alestor1@unc.edu', 'secured line');
insert into users (firstname, lastname, email, pass) values ('Pepillo', 'Spurdens', 'pspurdens2@un.org', 'throughput');
insert into users (firstname, lastname, email, pass) values ('Darcy', 'McWaters', 'dmcwaters3@nature.com', 'Streamlined');
insert into users (firstname, lastname, email, pass) values ('Sibley', 'Dain', 'sdain4@biblegateway.com', 'optimizing');
insert into users (firstname, lastname, email, pass) values ('Duky', 'Newbold', 'dnewbold5@addthis.com', 'extranet');
insert into users (firstname, lastname, email, pass) values ('Haskell', 'Ellis', 'hellis6@wired.com', 'Operative');
insert into users (firstname, lastname, email, pass) values ('Roda', 'Didball', 'rdidball7@wikimedia.org', 'static');
insert into users (firstname, lastname, email, pass) values ('Adey', 'Leisman', 'aleisman8@behance.net', 'optimal');
insert into users (firstname, lastname, email, pass) values ('Casie', 'Lineker', 'clineker9@studiopress.com', 'grid-enabled');
insert into users (firstname, lastname, email, pass) values ('Francine', 'St Quenin', 'fstquenina@amazon.com', 'hardware');
insert into users (firstname, lastname, email, pass) values ('Fred', 'Vause', 'fvauseb@answers.com', '24/7');
insert into users (firstname, lastname, email, pass) values ('Cayla', 'Marti', 'cmartic@seesaa.net', 'moratorium');
insert into users (firstname, lastname, email, pass) values ('Zelda', 'Paulet', 'zpauletd@nationalgeographic.com', 'Focused');
insert into users (firstname, lastname, email, pass) values ('Granville', 'Robbs', 'grobbse@shutterfly.com', 'Multi-tiered');
insert into users (firstname, lastname, email, pass) values ('Teodorico', 'MacIntyre', 'tmacintyref@flickr.com', 'array');
insert into users (firstname, lastname, email, pass) values ('Cyril', 'Repp', 'creppg@rediff.com', 'secured line');
insert into users (firstname, lastname, email, pass) values ('Chloe', 'Freeburn', 'cfreeburnh@eventbrite.com', 'access');
insert into users (firstname, lastname, email, pass) values ('Immanuel', 'Beckett', 'ibecketti@youtu.be', 'framework');
insert into users (firstname, lastname, email, pass) values ('Laryssa', 'Jurn', 'ljurnj@mac.com', 'alliance');
insert into users (firstname, lastname, email, pass) values ('Doe', 'Smiths', 'dsmithsk@storify.com', '3rd generation');
insert into users (firstname, lastname, email, pass) values ('Kermie', 'Sterke', 'ksterkel@smh.com.au', 'Innovative');
insert into users (firstname, lastname, email, pass) values ('Selby', 'Tremblett', 'stremblettm@princeton.edu', 'Progressive');
insert into users (firstname, lastname, email, pass) values ('Evelyn', 'Wrought', 'ewroughtn@mtv.com', 'Assimilated');
insert into users (firstname, lastname, email, pass) values ('Audra', 'Hildrew', 'ahildrewo@g.co', 'directional');
insert into users (firstname, lastname, email, pass) values ('Clyde', 'Cairney', 'ccairneyp@lulu.com', 'actuating');
insert into users (firstname, lastname, email, pass) values ('Daphna', 'Thorbon', 'dthorbonq@dailymotion.com', 'intranet');
insert into users (firstname, lastname, email, pass) values ('Jolee', 'Brobeck', 'jbrobeckr@altervista.org', 'Multi-layered');
insert into users (firstname, lastname, email, pass) values ('Caprice', 'L''oiseau', 'cloiseaus@sun.com', 'even-keeled');
insert into users (firstname, lastname, email, pass) values ('Hedvige', 'Arrighini', 'harrighinit@wordpress.org', 'coherent');
insert into users (firstname, lastname, email, pass) values ('Arnold', 'Kesterton', 'akestertonu@ocn.ne.jp', 'Cross-group');
insert into users (firstname, lastname, email, pass) values ('Kaycee', 'Gateshill', 'kgateshillv@ox.ac.uk', 'system engine');
insert into users (firstname, lastname, email, pass) values ('Son', 'Shafier', 'sshafierw@economist.com', 'Cross-platform');
insert into users (firstname, lastname, email, pass) values ('Kylen', 'McPhelimey', 'kmcphelimeyx@hp.com', 'global');
insert into users (firstname, lastname, email, pass) values ('Collete', 'McKimmie', 'cmckimmiey@hugedomains.com', 'Sharable');
insert into users (firstname, lastname, email, pass) values ('Dixie', 'Robardet', 'drobardetz@dropbox.com', 'homogeneous');
insert into users (firstname, lastname, email, pass) values ('Massimo', 'Goult', 'mgoult10@istockphoto.com', 'Profound');
insert into users (firstname, lastname, email, pass) values ('Liuka', 'Broomer', 'lbroomer11@oakley.com', 'zero administration');
insert into users (firstname, lastname, email, pass) values ('Dew', 'Wintringham', 'dwintringham12@dropbox.com', 'tertiary');
insert into users (firstname, lastname, email, pass) values ('Jammal', 'Henner', 'jhenner13@1und1.de', 'didactic');
insert into users (firstname, lastname, email, pass) values ('Camila', 'Norwell', 'cnorwell14@time.com', 'methodology');
insert into users (firstname, lastname, email, pass) values ('Carolina', 'Faireclough', 'cfaireclough15@springer.com', 'Horizontal');
insert into users (firstname, lastname, email, pass) values ('Bee', 'Vasser', 'bvasser16@123-reg.co.uk', 'standardization');
insert into users (firstname, lastname, email, pass) values ('Charyl', 'Stute', 'cstute17@cdbaby.com', 'Pre-emptive');
insert into users (firstname, lastname, email, pass) values ('Clementine', 'Rigardeau', 'crigardeau18@gravatar.com', 'interactive');
insert into users (firstname, lastname, email, pass) values ('Link', 'Janes', 'ljanes19@csmonitor.com', 'composite');
insert into users (firstname, lastname, email, pass) values ('Jule', 'McLarty', 'jmclarty1a@i2i.jp', 'frame');
insert into users (firstname, lastname, email, pass) values ('Bertie', 'Jesson', 'bjesson1b@adobe.com', 'website');
insert into users (firstname, lastname, email, pass) values ('Noemi', 'Ugoletti', 'nugoletti1c@shinystat.com', 'bifurcated');
insert into users (firstname, lastname, email, pass) values ('Martguerita', 'McGilleghole', 'mmcgilleghole1d@jigsy.com', 'pricing structure');
insert into users (firstname, lastname, email, pass) values ('Sianna', 'Rudd', 'srudd1e@irs.gov', 'website');
insert into users (firstname, lastname, email, pass) values ('Diarmid', 'Presnell', 'dpresnell1f@uiuc.edu', 'methodology');
insert into users (firstname, lastname, email, pass) values ('Loralee', 'Brimacombe', 'lbrimacombe1g@networksolutions.com', 'challenge');
insert into users (firstname, lastname, email, pass) values ('Man', 'Budge', 'mbudge1h@domainmarket.com', 'disintermediate');
insert into users (firstname, lastname, email, pass) values ('Ezmeralda', 'Pratten', 'epratten1i@free.fr', 'coherent');
insert into users (firstname, lastname, email, pass) values ('Edie', 'Harvard', 'eharvard1j@creativecommons.org', 'Exclusive');
insert into users (firstname, lastname, email, pass) values ('Elsey', 'Clemintoni', 'eclemintoni1k@fema.gov', 'intangible');
insert into users (firstname, lastname, email, pass) values ('Husein', 'Colwill', 'hcolwill1l@sourceforge.net', 'tangible');
insert into users (firstname, lastname, email, pass) values ('Emory', 'Okey', 'eokey1m@mediafire.com', 'leading edge');
insert into users (firstname, lastname, email, pass) values ('Modestine', 'Blackley', 'mblackley1n@oaic.gov.au', 'Open-source');
insert into users (firstname, lastname, email, pass) values ('Marika', 'Simm', 'msimm1o@microsoft.com', 'open architecture');
insert into users (firstname, lastname, email, pass) values ('Casper', 'Drugan', 'cdrugan1p@state.gov', 'global');
insert into users (firstname, lastname, email, pass) values ('Sydel', 'Warland', 'swarland1q@jalbum.net', 'Open-architected');
insert into users (firstname, lastname, email, pass) values ('Estel', 'Bernaciak', 'ebernaciak1r@vinaora.com', 'maximized');
insert into users (firstname, lastname, email, pass) values ('Hewe', 'Farden', 'hfarden1s@e-recht24.de', 'uniform');
insert into users (firstname, lastname, email, pass) values ('Gretchen', 'Bamell', 'gbamell1t@gmpg.org', 'internet solution');
insert into users (firstname, lastname, email, pass) values ('Mariann', 'Piell', 'mpiell1u@chronoengine.com', 'Optional');
insert into users (firstname, lastname, email, pass) values ('Benjamen', 'Gladden', 'bgladden1v@irs.gov', 'motivating');
insert into users (firstname, lastname, email, pass) values ('Frankie', 'Westoff', 'fwestoff1w@hexun.com', 'groupware');
insert into users (firstname, lastname, email, pass) values ('Keely', 'Cocksedge', 'kcocksedge1x@wired.com', 'Operative');
insert into users (firstname, lastname, email, pass) values ('Galvan', 'Size', 'gsize1y@oakley.com', 'leading edge');
insert into users (firstname, lastname, email, pass) values ('Dorothee', 'Hustler', 'dhustler1z@addthis.com', 'motivating');
insert into users (firstname, lastname, email, pass) values ('Maynord', 'Brugsma', 'mbrugsma20@webeden.co.uk', 'challenge');
insert into users (firstname, lastname, email, pass) values ('Horton', 'Horsted', 'hhorsted21@fc2.com', 'full-range');
insert into users (firstname, lastname, email, pass) values ('Andi', 'Kettles', 'akettles22@nps.gov', 'solution-oriented');
insert into users (firstname, lastname, email, pass) values ('Leoine', 'Underdown', 'lunderdown23@t.co', 'Public-key');
insert into users (firstname, lastname, email, pass) values ('Dud', 'Dericot', 'ddericot24@noaa.gov', 'Business-focused');
insert into users (firstname, lastname, email, pass) values ('Cherlyn', 'Greveson', 'cgreveson25@typepad.com', 'motivating');
insert into users (firstname, lastname, email, pass) values ('Bobette', 'Ecob', 'becob26@nyu.edu', '24/7');
insert into users (firstname, lastname, email, pass) values ('Theresina', 'Vinecombe', 'tvinecombe27@senate.gov', 'help-desk');
insert into users (firstname, lastname, email, pass) values ('Carolyn', 'Winfred', 'cwinfred28@clickbank.net', 'knowledge user');
insert into users (firstname, lastname, email, pass) values ('Matthias', 'Mc Menamin', 'mmcmenamin29@google.co.jp', 'full-range');
insert into users (firstname, lastname, email, pass) values ('Marney', 'Matt', 'mmatt2a@google.com', 'Robust');
insert into users (firstname, lastname, email, pass) values ('Cindi', 'McGeaney', 'cmcgeaney2b@independent.co.uk', 'matrix');
insert into users (firstname, lastname, email, pass) values ('Ada', 'Godfray', 'agodfray2c@live.com', 'Face to face');
insert into users (firstname, lastname, email, pass) values ('Cristie', 'Orringe', 'corringe2d@cpanel.net', 'next generation');
insert into users (firstname, lastname, email, pass) values ('Levin', 'Strivens', 'lstrivens2e@illinois.edu', 'coherent');
insert into users (firstname, lastname, email, pass) values ('Roberta', 'Bigglestone', 'rbigglestone2f@oaic.gov.au', 'web-enabled');
insert into users (firstname, lastname, email, pass) values ('Orelle', 'Concannon', 'oconcannon2g@addthis.com', 'instruction set');
insert into users (firstname, lastname, email, pass) values ('Nananne', 'Hamer', 'nhamer2h@wordpress.org', 'Reduced');
insert into users (firstname, lastname, email, pass) values ('Dulcinea', 'Dumphy', 'ddumphy2i@eventbrite.com', 'zero administration');
insert into users (firstname, lastname, email, pass) values ('Bailie', 'Drinkall', 'bdrinkall2j@wikia.com', 'Open-architected');
insert into users (firstname, lastname, email, pass) values ('Lesli', 'Feake', 'lfeake2k@nasa.gov', 'Visionary');
insert into users (firstname, lastname, email, pass) values ('Karalynn', 'Stopford', 'kstopford2l@blinklist.com', 'Visionary');
insert into users (firstname, lastname, email, pass) values ('Biddy', 'Barthelme', 'bbarthelme2m@netvibes.com', 'Distributed');
insert into users (firstname, lastname, email, pass) values ('Haley', 'Benit', 'hbenit2n@wix.com', 'encryption');
insert into users (firstname, lastname, email, pass) values ('Josselyn', 'Kalker', 'jkalker2o@drupal.org', 'Synchronised');
insert into users (firstname, lastname, email, pass) values ('Fidel', 'Ollin', 'follin2p@youtu.be', 'definition');
insert into users (firstname, lastname, email, pass) values ('Charity', 'Slinn', 'cslinn2q@liveinternet.ru', 'Programmable');
insert into users (firstname, lastname, email, pass) values ('Gerhard', 'Rambadt', 'grambadt2r@dion.ne.jp', 'Fully-configurable');






insert into questions (title, context, question_date) values ('The French word for "glass" is "glace".', 'true', '3/7/2020');
insert into questions (title, context, question_date) values ('David Baszucki was a co-founder of ROBLOX Corporation.', 'true', '6/12/2020');
insert into questions (title, context, question_date) values ('Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.', 'true', '12/7/2019');
insert into questions (title, context, question_date) values ('Helen Clark was the 37th Prime Minister of Australia.', 'false', '3/26/2020');
insert into questions (title, context, question_date) values ('The Pythagorean theorem states that the square of the hypotenuse is equal to the product of the squares of the other two sides.', 'false', '6/15/2020');
insert into questions (title, context, question_date) values ('The Pythagorean theorem states that the square of the hypotenuse is equal to the product of the squares of the other two sides.', 'false', '4/6/2020');
insert into questions (title, context, question_date) values ('AMD created the first consumer 64-bit processor.', 'false', '5/18/2020');
insert into questions (title, context, question_date) values ('"The Simpsons" family is named after creator Matt Groening''s real family.', 'false', '10/7/2020');
insert into questions (title, context, question_date) values ('In the game Dead by Daylight, the killer Michael Myers is refered to as "The Shape".', 'true', '5/3/2020');
insert into questions (title, context, question_date) values ('Rebecca Chambers does not appear in any Resident Evil except for the original Resident Evil and the Gamecube remake.', 'true', '10/13/2019');
insert into questions (title, context, question_date) values ('Codemasters is the developer of the Gran Turismo series.', 'true', '10/3/2020');
insert into questions (title, context, question_date) values ('Originally, the character Charlie from Charlie and the Chocolate Factory was going to be black.', 'false', '5/23/2020');
insert into questions (title, context, question_date) values ('There are no roads in/out of Juneau, Alaska.', 'true', '6/14/2020');
insert into questions (title, context, question_date) values ('In Pok&eacute;mon Sun and Moon, a male Salandit can evolve to a Salazzle.', 'false', '6/24/2020');
insert into questions (title, context, question_date) values ('One of Donald Trump''s 2016 Presidential Campaign promises was to build a border wall between the United States and Mexico.', 'false', '9/11/2020');
insert into questions (title, context, question_date) values ('A scalene triangle has two sides of equal length.', 'false', '9/25/2020');
insert into questions (title, context, question_date) values ('Formula E is an auto racing series that uses hybrid electric race cars.', 'true', '2/21/2020');
insert into questions (title, context, question_date) values ('Gosho Aoyama Made This Series: (Detective Conan / Case Closed!)', 'true', '12/27/2019');
insert into questions (title, context, question_date) values ('Scottish producer Calvin Harris is from the town of Dumfries, Scotland.', 'true', '8/4/2020');
insert into questions (title, context, question_date) values ('In Undertale, having a "Fun Value" set to 56-57 will play the "Wrong Number Song Call".', 'false', '6/7/2020');
insert into questions (title, context, question_date) values ('English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.', 'false', '8/10/2020');
insert into questions (title, context, question_date) values ('The Southeast Asian island of Borneo is politically divided among 3 countries.', 'true', '1/4/2020');
insert into questions (title, context, question_date) values ('The "Squaring the Circle" problem is solvable.', 'false', '4/9/2020');
insert into questions (title, context, question_date) values ('In "Need for Speed: Porsche Unleashed", the player can only drive cars manufactured by Porsche.', 'true', '7/21/2020');
insert into questions (title, context, question_date) values ('In the game Dead by Daylight, the killer Michael Myers is refered to as "The Shape".', 'false', '9/19/2020');
insert into questions (title, context, question_date) values ('The Killer Whale is considered a type of dolphin.', 'true', '1/3/2020');
insert into questions (title, context, question_date) values ('In the original script of "The Matrix", the machines used humans as additional computing power instead of batteries.', 'true', '12/21/2019');
insert into questions (title, context, question_date) values ('In the original script of "The Matrix", the machines used humans as additional computing power instead of batteries.', 'false', '10/11/2020');
insert into questions (title, context, question_date) values ('Leonardo DiCaprio won an Oscar for Best Actor in 2004''s "The Aviator".', 'false', '4/18/2020');
insert into questions (title, context, question_date) values ('The weapon Clint Eastwood uses in "Dirty Harry" was a .44 Automag.', 'true', '6/30/2020');
insert into questions (title, context, question_date) values ('The French word for "glass" is "glace".', 'true', '9/28/2020');
insert into questions (title, context, question_date) values ('"The Simpsons" family is named after creator Matt Groening''s real family.', 'true', '2/23/2020');
insert into questions (title, context, question_date) values ('Gosho Aoyama Made This Series: (Detective Conan / Case Closed!)', 'true', '10/19/2019');
insert into questions (title, context, question_date) values ('The Southeast Asian island of Borneo is politically divided among 3 countries.', 'false', '8/31/2020');
insert into questions (title, context, question_date) values ('"Green Eggs and Ham" consists of only 50 different words.', 'true', '12/2/2019');
insert into questions (title, context, question_date) values ('The ''Squaring the Circle'' problem is solvable.', 'true', '2/28/2020');
insert into questions (title, context, question_date) values ('American rapper Dr. Dre actually has a Ph.D. doctorate.', 'true', '10/28/2019');
insert into questions (title, context, question_date) values ('Rebecca Chambers does not appear in any Resident Evil except for the original Resident Evil and the Gamecube remake.', 'false', '7/13/2020');
insert into questions (title, context, question_date) values ('In Splatoon, the Squid Sisters are named Tako and Yaki.', 'true', '8/3/2020');
insert into questions (title, context, question_date) values ('"Green Eggs and Ham" consists of only 50 different words.', 'false', '10/22/2019');
insert into questions (title, context, question_date) values ('Gosho Aoyama Made This Series: (Detective Conan / Case Closed!)', 'false', '5/18/2020');
insert into questions (title, context, question_date) values ('Nick Mason is the only member to appear on every Pink Floyd album.', 'false', '9/13/2020');
insert into questions (title, context, question_date) values ('Helen Clark was the 37th Prime Minister of Australia.', 'true', '4/26/2020');
insert into questions (title, context, question_date) values ('One of Donald Trump''s 2016 Presidential Campaign promises was to build a border wall between the United States and Mexico.', 'true', '4/4/2020');
insert into questions (title, context, question_date) values ('The French word for "glass" is "glace".', 'true', '7/26/2020');
insert into questions (title, context, question_date) values ('Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.', 'true', '8/2/2020');
insert into questions (title, context, question_date) values ('Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.', 'false', '1/11/2020');
insert into questions (title, context, question_date) values ('Rebecca Chambers does not appear in any Resident Evil except for the original Resident Evil and the Gamecube remake.', 'true', '11/24/2019');
insert into questions (title, context, question_date) values ('Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.', 'false', '1/31/2020');
insert into questions (title, context, question_date) values ('In Pok&eacute;mon Sun and Moon, a male Salandit can evolve to a Salazzle.', 'true', '1/7/2020');
insert into questions (title, context, question_date) values ('English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.', 'false', '5/1/2020');
insert into questions (title, context, question_date) values ('AMD created the first consumer 64-bit processor.', 'false', '6/18/2020');
insert into questions (title, context, question_date) values ('In the TV series Red Dwarf, Kryten''s full name is Kryten 2X4B-523P.', 'false', '12/3/2019');
insert into questions (title, context, question_date) values ('The game "Jetpack Joyride" was created by "Redbrick Studios".', 'false', '4/10/2020');
insert into questions (title, context, question_date) values ('In Undertale, having a "Fun Value" set to 56-57 will play the "Wrong Number Song Call".', 'true', '8/19/2020');
insert into questions (title, context, question_date) values ('In "Super Mario 3D World", the Double Cherry power-up originated from a developer accidentally making two characters controllable.', 'true', '7/29/2020');
insert into questions (title, context, question_date) values ('The weapon Clint Eastwood uses in "Dirty Harry" was a .44 Automag.', 'true', '2/8/2020');
insert into questions (title, context, question_date) values ('Originally, the character Charlie from Charlie and the Chocolate Factory was going to be black.', 'false', '11/29/2019');
insert into questions (title, context, question_date) values ('"The Simpsons" family is named after creator Matt Groening''s real family.', 'true', '8/5/2020');
insert into questions (title, context, question_date) values ('The "Squaring the Circle" problem is solvable.', 'false', '8/17/2020');
insert into questions (title, context, question_date) values ('Rabbits are carnivores.', 'true', '12/23/2019');
insert into questions (title, context, question_date) values ('The French word for "glass" is "glace".', 'true', '6/12/2020');
insert into questions (title, context, question_date) values ('Originally, the character Charlie from Charlie and the Chocolate Factory was going to be black.', 'false', '12/29/2019');
insert into questions (title, context, question_date) values ('English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.', 'true', '11/5/2019');
insert into questions (title, context, question_date) values ('The weapon Clint Eastwood uses in "Dirty Harry" was a .44 Automag.', 'true', '5/31/2020');
insert into questions (title, context, question_date) values ('Rabbits are carnivores.', 'true', '2/28/2020');
insert into questions (title, context, question_date) values ('English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.', 'true', '1/27/2020');
insert into questions (title, context, question_date) values ('Originally, the character Charlie from Charlie and the Chocolate Factory was going to be black.', 'true', '10/30/2019');
insert into questions (title, context, question_date) values ('In Team Fortress 2, being disguised as a scout or medic results in a speed boost.', 'true', '12/14/2019');
insert into questions (title, context, question_date) values ('In "Super Mario 3D World", the Double Cherry power-up originated from a developer accidentally making two characters controllable.', 'true', '1/6/2020');
insert into questions (title, context, question_date) values ('Codemasters is the developer of the Gran Turismo series.', 'false', '9/30/2020');
insert into questions (title, context, question_date) values ('Originally, the character Charlie from Charlie and the Chocolate Factory was going to be black.', 'true', '4/22/2020');
insert into questions (title, context, question_date) values ('In Team Fortress 2, being disguised as a scout or medic results in a speed boost.', 'false', '4/8/2020');
insert into questions (title, context, question_date) values ('In Pok&eacute;mon Sun and Moon, a male Salandit can evolve to a Salazzle.', 'false', '12/10/2019');
insert into questions (title, context, question_date) values ('The Southeast Asian island of Borneo is politically divided among 3 countries.', 'false', '11/21/2019');
insert into questions (title, context, question_date) values ('The "Berenstein Bears" is the correct spelling of the educational children''s book series'' name.', 'false', '1/24/2020');
insert into questions (title, context, question_date) values ('"The Simpsons" family is named after creator Matt Groening''s real family.', 'true', '9/25/2020');
insert into questions (title, context, question_date) values ('Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.', 'true', '7/21/2020');
insert into questions (title, context, question_date) values ('In Splatoon, the Squid Sisters are named Tako and Yaki.', 'false', '11/7/2019');
insert into questions (title, context, question_date) values ('Originally, the character Charlie from Charlie and the Chocolate Factory was going to be black.', 'true', '10/8/2020');
insert into questions (title, context, question_date) values ('"The Simpsons" family is named after creator Matt Groening''s real family.', 'false', '2/26/2020');
insert into questions (title, context, question_date) values ('In the game Dead by Daylight, the killer Michael Myers is refered to as "The Shape".', 'false', '4/27/2020');
insert into questions (title, context, question_date) values ('Codemasters is the developer of the Gran Turismo series.', 'true', '9/22/2020');
insert into questions (title, context, question_date) values ('In Undertale, having a "Fun Value" set to 56-57 will play the "Wrong Number Song Call".', 'false', '3/17/2020');
insert into questions (title, context, question_date) values ('The Pythagorean theorem states that the square of the hypotenuse is equal to the product of the squares of the other two sides.', 'false', '1/31/2020');
insert into questions (title, context, question_date) values ('Leonardo DiCaprio won an Oscar for Best Actor in 2004''s "The Aviator".', 'true', '3/14/2020');
insert into questions (title, context, question_date) values ('The Killer Whale is considered a type of dolphin.', 'false', '11/7/2019');
insert into questions (title, context, question_date) values ('In "Super Mario 3D World", the Double Cherry power-up originated from a developer accidentally making two characters controllable.', 'false', '10/20/2019');
insert into questions (title, context, question_date) values ('Rabbits are carnivores.', 'false', '5/19/2020');
insert into questions (title, context, question_date) values ('AMD created the first consumer 64-bit processor.', 'false', '10/7/2020');
insert into questions (title, context, question_date) values ('The "Berenstein Bears" is the correct spelling of the educational children''s book series'' name.', 'false', '10/30/2019');
insert into questions (title, context, question_date) values ('Leonardo DiCaprio won an Oscar for Best Actor in 2004''s "The Aviator".', 'true', '7/7/2020');
insert into questions (title, context, question_date) values ('David Baszucki was a co-founder of ROBLOX Corporation.', 'false', '8/31/2020');
insert into questions (title, context, question_date) values ('Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.', 'true', '6/24/2020');
insert into questions (title, context, question_date) values ('Nick Mason is the only member to appear on every Pink Floyd album.', 'true', '9/22/2020');
insert into questions (title, context, question_date) values ('The weapon Clint Eastwood uses in "Dirty Harry" was a .44 Automag.', 'true', '7/10/2020');
insert into questions (title, context, question_date) values ('Former United States Presidents John Adams and Thomas Jefferson died within hours of each other.', 'true', '4/11/2020');
insert into questions (title, context, question_date) values ('An isosceles triangle has two sides of equal length as opposed to three.', 'true', '10/24/2019');
insert into questions (title, context, question_date) values ('Luigi is taller than Mario?', 'false', '1/28/2020');
insert into questions (title, context, question_date) values ('The "Berenstein Bears" is the correct spelling of the educational children''s book series'' name.', 'false', '7/25/2020');


insert into comments (question_id, comment, comment_date) values (1, 'grow bleeding-edge web services', '3/23/2020');
insert into comments (question_id, comment, comment_date) values (2, 'deliver turn-key e-commerce', '3/3/2020');
insert into comments (question_id, comment, comment_date) values (3, 'unleash mission-critical synergies', '6/17/2020');
insert into comments (question_id, comment, comment_date) values (4, 'streamline interactive markets', '7/23/2020');
insert into comments (question_id, comment, comment_date) values (5, 'enhance dynamic synergies', '8/12/2020');
insert into comments (question_id, comment, comment_date) values (6, 'drive proactive synergies', '3/2/2020');
insert into comments (question_id, comment, comment_date) values (7, 'maximize revolutionary architectures', '1/25/2020');
insert into comments (question_id, comment, comment_date) values (8, 'strategize granular applications', '8/23/2020');
insert into comments (question_id, comment, comment_date) values (9, 'synthesize efficient markets', '11/20/2019');
insert into comments (question_id, comment, comment_date) values (10, 'architect web-enabled infrastructures', '12/17/2019');
insert into comments (question_id, comment, comment_date) values (11, 'redefine efficient metrics', '3/18/2020');
insert into comments (question_id, comment, comment_date) values (12, 'disintermediate one-to-one platforms', '6/22/2020');
insert into comments (question_id, comment, comment_date) values (13, 'expedite compelling interfaces', '8/28/2020');
insert into comments (question_id, comment, comment_date) values (14, 'benchmark collaborative mindshare', '3/18/2020');
insert into comments (question_id, comment, comment_date) values (15, 'scale world-class niches', '7/2/2020');
insert into comments (question_id, comment, comment_date) values (16, 'seize proactive synergies', '9/18/2020');
insert into comments (question_id, comment, comment_date) values (17, 'integrate impactful functionalities', '6/27/2020');
insert into comments (question_id, comment, comment_date) values (18, 'orchestrate end-to-end e-markets', '6/27/2020');
insert into comments (question_id, comment, comment_date) values (19, 'enable next-generation portals', '8/20/2020');
insert into comments (question_id, comment, comment_date) values (20, 'benchmark B2B architectures', '5/11/2020');
insert into comments (question_id, comment, comment_date) values (21, 'cultivate user-centric e-tailers', '1/6/2020');
insert into comments (question_id, comment, comment_date) values (22, 'embrace transparent architectures', '12/19/2019');
insert into comments (question_id, comment, comment_date) values (23, 'e-enable global partnerships', '10/24/2019');
insert into comments (question_id, comment, comment_date) values (24, 'disintermediate interactive content', '2/19/2020');
insert into comments (question_id, comment, comment_date) values (25, 'orchestrate efficient infrastructures', '12/28/2019');
insert into comments (question_id, comment, comment_date) values (26, 'mesh mission-critical schemas', '3/17/2020');
insert into comments (question_id, comment, comment_date) values (27, 'aggregate wireless models', '10/12/2019');
insert into comments (question_id, comment, comment_date) values (28, 'envisioneer wireless e-services', '5/8/2020');
insert into comments (question_id, comment, comment_date) values (29, 'iterate dynamic paradigms', '7/21/2020');
insert into comments (question_id, comment, comment_date) values (30, 'brand web-enabled convergence', '9/9/2020');
insert into comments (question_id, comment, comment_date) values (31, 'synergize wireless e-tailers', '9/26/2020');
insert into comments (question_id, comment, comment_date) values (32, 'morph dot-com partnerships', '6/19/2020');
insert into comments (question_id, comment, comment_date) values (33, 'enhance visionary web services', '4/15/2020');
insert into comments (question_id, comment, comment_date) values (34, 'maximize 24/365 models', '6/24/2020');
insert into comments (question_id, comment, comment_date) values (35, 'deploy revolutionary architectures', '1/12/2020');
insert into comments (question_id, comment, comment_date) values (36, 'transform sexy e-tailers', '3/30/2020');
insert into comments (question_id, comment, comment_date) values (37, 'unleash sexy vortals', '7/24/2020');
insert into comments (question_id, comment, comment_date) values (38, 'matrix 24/7 e-commerce', '10/22/2019');
insert into comments (question_id, comment, comment_date) values (39, 'reintermediate web-enabled synergies', '6/30/2020');
insert into comments (question_id, comment, comment_date) values (40, 'extend collaborative users', '5/10/2020');
insert into comments (question_id, comment, comment_date) values (41, 'whiteboard out-of-the-box communities', '8/7/2020');
insert into comments (question_id, comment, comment_date) values (42, 'generate user-centric infrastructures', '9/19/2020');
insert into comments (question_id, comment, comment_date) values (43, 'integrate extensible applications', '10/1/2020');
insert into comments (question_id, comment, comment_date) values (44, 'cultivate value-added methodologies', '4/4/2020');
insert into comments (question_id, comment, comment_date) values (45, 'recontextualize rich channels', '8/27/2020');
insert into comments (question_id, comment, comment_date) values (46, 'mesh global e-tailers', '3/2/2020');
insert into comments (question_id, comment, comment_date) values (47, 'harness granular architectures', '2/25/2020');
insert into comments (question_id, comment, comment_date) values (48, 'scale turn-key metrics', '1/19/2020');
insert into comments (question_id, comment, comment_date) values (49, 'orchestrate cross-platform platforms', '6/26/2020');
insert into comments (question_id, comment, comment_date) values (50, 'empower robust web-readiness', '9/21/2020');
insert into comments (question_id, comment, comment_date) values (51, 'enable virtual metrics', '1/31/2020');
insert into comments (question_id, comment, comment_date) values (52, 'synthesize next-generation markets', '3/18/2020');
insert into comments (question_id, comment, comment_date) values (53, 'orchestrate dot-com technologies', '12/29/2019');
insert into comments (question_id, comment, comment_date) values (54, 'visualize world-class initiatives', '10/8/2020');
insert into comments (question_id, comment, comment_date) values (55, 'synthesize visionary e-commerce', '10/11/2020');
insert into comments (question_id, comment, comment_date) values (56, 'synthesize wireless ROI', '1/20/2020');
insert into comments (question_id, comment, comment_date) values (57, 'embrace interactive channels', '1/7/2020');
insert into comments (question_id, comment, comment_date) values (58, 'deploy seamless networks', '8/22/2020');
insert into comments (question_id, comment, comment_date) values (59, 'extend open-source infrastructures', '1/9/2020');
insert into comments (question_id, comment, comment_date) values (60, 'redefine scalable users', '3/28/2020');
insert into comments (question_id, comment, comment_date) values (61, 'utilize user-centric supply-chains', '9/11/2020');
insert into comments (question_id, comment, comment_date) values (62, 'engage proactive e-commerce', '1/18/2020');
insert into comments (question_id, comment, comment_date) values (63, 'iterate cutting-edge functionalities', '12/13/2019');
insert into comments (question_id, comment, comment_date) values (64, 'iterate extensible experiences', '9/22/2020');
insert into comments (question_id, comment, comment_date) values (65, 'exploit dynamic schemas', '11/2/2019');
insert into comments (question_id, comment, comment_date) values (66, 'productize clicks-and-mortar solutions', '3/15/2020');
insert into comments (question_id, comment, comment_date) values (67, 'streamline impactful e-services', '1/26/2020');
insert into comments (question_id, comment, comment_date) values (68, 'innovate wireless solutions', '10/15/2019');
insert into comments (question_id, comment, comment_date) values (69, 'deliver 24/365 channels', '7/22/2020');
insert into comments (question_id, comment, comment_date) values (70, 'drive viral architectures', '10/7/2020');
insert into comments (question_id, comment, comment_date) values (71, 'optimize one-to-one relationships', '9/26/2020');
insert into comments (question_id, comment, comment_date) values (72, 'engineer proactive metrics', '8/24/2020');
insert into comments (question_id, comment, comment_date) values (73, 'harness collaborative supply-chains', '11/14/2019');
insert into comments (question_id, comment, comment_date) values (74, 'engage leading-edge vortals', '4/4/2020');
insert into comments (question_id, comment, comment_date) values (75, 'evolve magnetic models', '1/14/2020');
insert into comments (question_id, comment, comment_date) values (76, 'morph one-to-one e-tailers', '3/9/2020');
insert into comments (question_id, comment, comment_date) values (77, 'target user-centric convergence', '6/7/2020');
insert into comments (question_id, comment, comment_date) values (78, 'redefine impactful web services', '3/7/2020');
insert into comments (question_id, comment, comment_date) values (79, 'revolutionize e-business vortals', '5/19/2020');
insert into comments (question_id, comment, comment_date) values (80, 'implement B2C markets', '6/3/2020');
insert into comments (question_id, comment, comment_date) values (81, 'reintermediate customized initiatives', '11/3/2019');
insert into comments (question_id, comment, comment_date) values (82, 'empower synergistic technologies', '6/23/2020');
insert into comments (question_id, comment, comment_date) values (83, 'synthesize cross-platform web services', '10/22/2019');
insert into comments (question_id, comment, comment_date) values (84, 'maximize 24/365 systems', '6/26/2020');
insert into comments (question_id, comment, comment_date) values (85, 'productize e-business architectures', '12/10/2019');
insert into comments (question_id, comment, comment_date) values (86, 'orchestrate open-source systems', '9/4/2020');
insert into comments (question_id, comment, comment_date) values (87, 'embrace impactful e-commerce', '1/16/2020');
insert into comments (question_id, comment, comment_date) values (88, 'strategize back-end e-business', '6/8/2020');
insert into comments (question_id, comment, comment_date) values (89, 'unleash synergistic communities', '6/5/2020');
insert into comments (question_id, comment, comment_date) values (90, 'disintermediate integrated solutions', '6/13/2020');
insert into comments (question_id, comment, comment_date) values (91, 'evolve innovative users', '4/13/2020');
insert into comments (question_id, comment, comment_date) values (92, 'generate efficient markets', '7/5/2020');
insert into comments (question_id, comment, comment_date) values (93, 'architect one-to-one e-business', '2/7/2020');
insert into comments (question_id, comment, comment_date) values (94, 'extend synergistic e-commerce', '10/28/2019');
insert into comments (question_id, comment, comment_date) values (95, 'seize cross-media interfaces', '5/3/2020');
insert into comments (question_id, comment, comment_date) values (96, 'leverage turn-key platforms', '3/12/2020');
insert into comments (question_id, comment, comment_date) values (97, 'transition visionary schemas', '4/6/2020');
insert into comments (question_id, comment, comment_date) values (98, 'orchestrate global e-markets', '10/18/2019');
insert into comments (question_id, comment, comment_date) values (99, 'scale dynamic methodologies', '11/9/2019');
insert into comments (question_id, comment, comment_date) values (100, 'mesh magnetic supply-chains', '11/5/2019');