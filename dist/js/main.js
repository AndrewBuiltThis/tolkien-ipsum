// Title : Tolkien Ipsum
// Objective : This is the main logic to update the ipsum text within the site. It also is responsible for handling the theme-sync.
// Author : Andrew Valenski
// Date : 1/28/2019
// ToS : MIT License

// The general flow/structure of this JS file is that of a single function that will be consumed via chained callbacks.
// Less abstractly, the flow is this: the theme is set -> once the theme is set, the innerHTML is changed on the page -> once the theme is set, the innerHTML is set, then the ipsum text is gathered and populates the ipsumText component.
// In practice, this looks like this updateIpsum(updateHTML(setTheme(this))); which is invoked by the specific buttons on the HTML page.

// Get Appropriate JSON identifier
function setTheme(element){
    let currentActiveWorld = document.querySelector(".active");
    currentActiveWorld.classList.toggle("active");

    let documentBody = document.querySelector("body");
    documentBody.className = element.id;

    element.classList.toggle("active");

    if(element.id === "middleEarthTheme"){
        return("Middle Earth");
    }
    else if(element.id === "theShireTheme"){
        return("The Shire");
    }
    else if(element.id === "rivendellTheme"){
        return("Rivendell")
    }
    else if(element.id === "mordorTheme"){
        return("Mordor");
    }
    else{
        console.log("An Error Occured. That Sucks.")
        return
    }
}

function updateHTML(themeName){
    let worldNameSpans = document.querySelectorAll(".worldName");
    for(i=0; i < worldNameSpans.length; i++){
        worldNameSpans[i].innerHTML = themeName;
    }
    return(themeName);
}

// Change the Ipsum Elements in the Ipsum Container 
function updateIpsum(themeName){
    var ipsumNode = document.querySelector("#ipsumText");
    while(ipsumNode.firstChild){
        ipsumNode.removeChild(ipsumNode.firstChild);
    }
    var worldIpsum = tolkienJSON[themeName];
    for(i=0; i < 12; i++){
        var pNode = document.createElement("p");
        var randomInt = Math.floor(Math.random() * (worldIpsum.length));
        var randomIpsum = worldIpsum[randomInt];
        var tNode = document.createTextNode(randomIpsum);
        pNode.className = "animated bounceInUp delay-0" + String(i +1) + "s"
        pNode.appendChild(tNode);
        ipsumNode.appendChild(pNode);
    }
}


const tolkienJSON = {
    "Middle Earth":[
      "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in halls of stone, Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In the Land of Mordor where the Shadows lie.",
      "Frodo: Go back, Sam! I’m going to Mordor alone. Sam: Of course you are, and I’m coming with you!",
      "But Sauron was not of mortal flesh, and though he was robbed now of that shape in which had wrought so great an evil, so that he could never again appear fair to the eyes of Men, yet his spirit arose out of the deep and passed as a shadow and a black wind over the sea, and came back to Middle-earth and to Mordor that was his home. There he took up again his great Ring in Barad-dur, and dwelt there, dark and silent, until he wrought himself a new guise, an image of malice and hatred made visible; and the Eye of Sauron the Terrible few could endure.",
      "Gil-galad was an Elven-king. Of him the harpers sadly sing: the last whose realm was fair and free between the Mountains and the Sea. His sword was long, his lance was keen, his shining helm afar was seen; the countless stars of heaven's field were mirrored in his silver shield. But long ago he rode away, and where he dwelleth none can say; for into darkness fell his star in Mordor where the shadows are.",
      "The Sword of Elendil was forged anew by Elvish smiths, and on its blade was traced a device of seven stars set between the crescent Moon and rayed Sun, and about them was written many runes; for Aragorn son of Arathorn was going to war upon the marches of Mordor. Very bright was that sword when it was made whole again; the light of the sun shone redly in it, and the light of the moon shone cold, its edge was hard and keen. And Aragorn gave it a new name and called it Andúril, Flame of the West.",
      "'It would be the death of you to come with me, Sam,' said Frodo, 'and I could not have borne that.' 'Not as certain as being left behind,' said Sam. 'But I am going to Mordor.' 'I know that well enough, Mr. Frodo. Of course you are. And I'm coming with you.'",
      "All that is gold does not glitter.",
      "Come not between the Nazgûl and his prey! Or he will not slay thee in thy turn. He will bear thee away to the houses of lamentation, beyond all darkness, where thy flesh shall be devoured, and thy shriveled mind be left naked to the Lidless Eye",
      "He loved mountains, or he had loved the thought of them marching on the edge of stories brought from far away; but now he was borne down by the insupportable weight of Middle-earth. He longed to shut out the immensity in a quiet room by a fire.",
      "There, peeping among the cloud-wrack above a dark tor high up in the mountains, Sam saw a white star twinkle for a while. The beauty of it smote his heart, as he looked up out of the forsaken land, and hope returned to him.",
      "The counsel of Gandalf was not founded on foreknowledge of safety, for himself or for others,’ said Aragorn. ‘There are some things that it is better to begin than to refuse, even though the end may be dark.",
      "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.",
      "I will do now what I must. This at least is plain: the evil of the Ring is already at work even in the Company, and the Ring must leave them before it does more harm. I will go alone. Some I cannot trust, and those who I can trust are too dear to me: poor old Sam, and Merry and Pippin. Strider, too: his heart yearns for Minas Tirith, and he will be needed there, now Boromir has fallen into evil. I will go alone. At once.",
      "The praise of the praiseworthy is above all rewards.",
      "The world is full enough of hurts and mischances without wars to multiply them.",
      "Folk seem to have been just landed in them [adventures], usually–their oaths were laid that way, as you put it. But I expect they had lots of chances, like us, of turning back, only they didn’t. And if they had, we shouldn’t know, because they’d have been forgotten.",
      "Well, I’m back.",
      "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.",
      "The road must be trod, but it will be very hard. And neither strength nor wisdom will carry us far upon it. This quest may be attempted by the weak with as much hope as the strong. Yet it is oft the course of deeds that move the wheels of the world: Small hands do them because they must, while the eyes of the great are elsewhere.",
      "It’s the job that’s never started as takes longest to finish.",
      "It’s like in the great stories, Mr. Frodo. The ones that really mattered. Full of darkness and danger they were. And sometimes you didn’t want to know the end… because how could the end be happy? How could the world go back to the way it was when so much bad had happened? But in the end, it’s only a passing thing… this shadow. Even darkness must pass.",
      "Fair speech may hide a foul heart.",
      "Things will go as they will; and there is no need to hurry to meet them.",
      "It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till. What weather they shall have is not ours to rule.",
      "End? No, the journey doesn’t end here. Death is just another path. One that we all must take.",
      "I will not say, do not weep, for not all tears are an evil.",
      "The Road goes ever on and on Down from the door where it began. Now far ahead the Road has gone,     And I must follow, if I can.",
      "Short cuts make long delays.",
      "No half-heartedness and no worldly fear must turn us aside from following the light unflinchingly.",
      "Still round the corner there may wait A new road or a secret gate And though I oft have passed them by A day will come at last when I Shall take the hidden paths that run West of the Moon, East of the Sun.",
      "The wide world is all about you: you can fence yourselves in, but you cannot forever fence it out.",
      "Deep roots are not reached by the frost.",
      "Fate Has Chosen Him. A Fellowship Will Protect Him. Evil Will Hunt Them."
    ],
    "The Shire":[
      "It’s a dangerous business, Frodo, going out your door…You step into the Road, and if you don’t keep your feet, there is no knowing where you might be swept off to.",
      "I feel that as long as the Shire lies behind, safe and comfortable, I shall find wandering more bearable: I shall know that somewhere there is a firm foothold, even if my feet cannot stand there again.",
      "Home is behind, the world ahead.",
      "Even the smallest person can change the course of the future.",
      "I should like to save the Shire, if I could - though there have been times when I thought the inhabitants too stupid and dull for words, and have felt that an earthquake or an invasion of dragons might be good for them. But I don't feel like that now. I feel that as long as the Shire lies behind, safe and comfortable, I shall find wandering more bearable: I shall know that somewhere there is a firm foothold, even if my feet cannot stand there again.",
      "I tried to save the Shire, and it has been saved, but not for me. It must often be so, Sam, when things are in danger: some one has to give them up, lose them, so that others may keep them.",
      "... good natured faces, and laugh deep fruity laughs (especially after dinner, which they have twice a day when they can get it).",
      "They love peace and quiet and good tilled earth: a well-ordered countryside was their favorite haunt.",
      "We are plain quiet folk and have no use for adventures. Nasty disturbing uncomfortable things! Make you late for dinner! I can’t think what anybody sees in them.",
      "Sorry! I don’t want any adventures, thank you. Not today. Good morning! But please come to tea – any time you like! Why not tomorrow? Come tomorrow! Good-bye!",
      "The Bagginses had lived in the neighbourhood of The Hill for time out of mind, and people considered them very respectable, not only because most of them were very rich, but also because they never had any adventures or did anything unexpected: you could tell what a Baggins would say on any question without the bother of asking him.",
      "'Good morning' said Bilbo, and he meant it. The sun was shining, and the grass was very green. But Gandalf looked at him from under long bushy eyebrows that stuck out further than the brim of his shady hat. 'What do you mean?' he said. 'Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on.' 'All of them at once,' said Bilbo.",
      "Bless me, life used to be quite inter- I mean, you used to upset things badly in these parts once upon a time.'",
      "In fact, I will go as far as to send you on this adventure. Very amusing for me, very good for you - and profitable too, very likely, if you ever get over it.'",
      "With that, the hobbit turned and scuttled inside his round green door, and shut it as quickly as he dared, not to seem rude. Wizards after all are wizards. [...] He had only just had breakfast, but he thought a cake or two and a drink of something would do him good after his fright.",
      "The hobbits [...] heeded less and less the world outside where dark things moved, until they came to think that peace and plenty were the rule in Middle-Earth and the right of all sensible folk. They forgot or ignored what little they had ever known of the Guardians, and of the labours of those that made possible the long peace of the Shire. They were, in fact, sheltered, but they had ceased to remember it.",
      "All the one hundred and forty-four guests expected a pleasant feast; though they rather dreaded the after-dinner speech of their host (an inevitable item). He was liable to drags in bits of what he called poetry.",
      "If most of us valued food and cheer and song above hoarded gold it would be a merrier world.",
      "This is a story of how a Baggins had an adventure, and found himself doing and saying things altogether unexpected.",
      "I don't know half of you half as well as I should like and I like less tan half of your half as well as you deserve.",
      "I found it is the small everyday deeds of ordinary folk that keep the darkness at bay, small acts of kindness and love.",
      "This is the hour of the Shire-folk, when they arise from their quiet fields to shake the towers and counsels of the Great.",
      "Bother burgling and everything to do with it! I wish I was at home in my nice hole by the fire wit the kettle just beginning to sing!",
      "I am in fact a Hobbit in all but size. I like gardens, trees, and unmechanized farmlands; I smoke a pipe, and like good plain food (unrefrigerated), but detest French cooking; I like, and even dare to wear in these dull days, ornamental waistcoats. I am fond of mushrooms (out of a field); have a very simple sense of humor (which even my appreciative critics find tiresome); I go to bed late and get up late (when possible). I do not travel much.",
      "And here he was, a little halfling from the Shire, a simple hobbit of the quiet countryside, expected to find a way where the great ones could not go, or dared not go. It was an evil fate.",
      "A fox passing through the wood on business of his own stopped several minutes and sniffed.'Hobbits!' he thought. 'Well, what next? I have heard of strange doings in this land, but I have seldom heard of a hobbit sleeping out of doors under a tree. Three of them! There's something mighty queer behind this.' He was quite right, but he never found out any more about it.",
      "Look, my friends!' he called. 'Here's a pretty hobbit-skin to wrap an elven princeling in! If it were known that hobbits had such hides, all the hunters of Middle Earth would be riding to the Shire.",
      "Even in ancient days they were, as a rule, shy of 'the Big Folk', as they call us, and now they avoid us with dismay and are becoming hard to find.",
      "He loved mountains, or he had loved the thought of them marching on the edge of stories brought from far away; but now he was borne down by the insupportable weight of Middle-earth. He longed to shut out the immensity in a quiet room by a fire.",
      "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.",
      "It is not the strength of the body, but the strength of the spirit.",
      "Folk seem to have been just landed in [adventures], usually — their paths were laid that way. But I expect they had lots of chances, like us, of turning back, only they didn’t. And if they had, we shouldn’t know, because they’d have been forgotten.",
      "My dear Frodo, Hobbits really are amazing creatures. You can learn all that there is to know about their ways in a month and yet, after a hundred years, they can still surprise you.",
      "And so life in the Shire goes on, very much as it has this past age. Full of its own comings and goings with change coming slowly, if it comes at all. For things are made to endure in the Shire, passing from one generation to the next. There’s always been a Baggins living here under the Hill, in Bag End. [to himself] And there always will be.",
      "Hobbits have been living and farming in the four Farthings of the Shire for many hundreds of years. Quite content to ignore and be ignored by the world of the Big Folk. Middle Earth being, after all, full of strange creatures beyond count. Hobbits must seem of little importance, being neither renowned as great warriors, nor counted amongst the very wise. ...In fact, it has been remarked by some that Hobbits’ only real passion is for food. A rather unfair observation as we have also developed a keen interest in the brewing of ales and the smoking of pipeweed. But where our hearts truly lie is in peace and quiet and good tilled earth. For all Hobbits share a love of all things that grow. And yes, no doubt to others, our ways seem quaint. But today of all days, it is brought home to me it is no bad thing to celebrate a simple life."
    ],
    "Mordor":[
      "Great engines crawled across the field; and in the midst was a huge ram, great as a forest-tree a hundred feet in length, swinging on mighty chains. Long had it been forging in the dark smithies of Mordor, and its hideous head, founded of black steel, was shaped in the likeness of a ravening wolf; on it spells of ruin lay. Grond they named it, in memory of the Hammer of the Underworld of old. Great beasts drew it, orcs surrounded it, and behind walked mountain-trolls to wield it.",
      "Sam: Mordor. The one place in Middle-earth we don't want to see any closer, and the one place we're trying to get to. It's just where we can't get. Let's face it, Mr. Frodo, we're lost. I don't think Gandalf meant for us to come this way.Frodo: He didn't mean for a lot of things to happen, Sam... but they did.",
      "Sauron was become now a sorcerer of dreadful power, master of shadows and of phantoms, foul in wisdom, cruel in strength, misshaping what he touched, twisting what he ruled, lord of werewolves; his dominion was torment.",
      "But suddenly the Mirror went altogether dark, as dark as if a hole had opened in the world of sight, and Frodo looked into emptiness. In the black abyss there appeared a single Eye that slowly grew, until it filled nearly all the Mirror. So terrible was it that Frodo stood rooted, unable to cry out or to withdraw his gaze. The Eye was rimmed with fire, but was itself glazed, yellow as a cat’s, watchful and intent, and the black slit of its pupil opened on a pit, a window into nothing.",
      "Mists curled and smoked from dark and noisome pools. The reek of them hung stifling in the still air. Far away, now almost due south, the mountain-walls of Mordor loomed, like a black bar of rugged clouds floating above a dangerous fog-bound sea.",
      "Presently it grew altogether dark: the air itself seemed black and heavy to breathe. When lights appeared, Sam rubbed his eyes: he thought his head was going queer. He first saw one with the corner of his left eye, a wisp of pale sheen that faded away; but others appeared soon after: some like dimly shining smoke, some like misty flames flickering slowly above unseen candles; here and there they twisted like ghostly sheets unfurled by hidden hands.",
      "In fact with every step towards the gates of Mordor Frodo felt the Ring on its chain about his neck grow more burdensome. He was now beginning to feel it as an actual weight dragging him earthwards. But far more he was troubled by the Eye: so he called it to himself. It was that more than the drag of the Ring that made him cower and stoop as he walked. The Eye: that horrible growing sense of a hostile will that strove with great power to pierce all the shadows of cloud, and earth, and flesh, and to see you: to pin you under its deadly gaze, naked, immovable. So thin, so frail and thin, the veils were become that still warded it off.",
      "The remainder of that journey was a shadow of growing fear in which memory could find nothing to rest upon. For two more nights, they struggled on through the weary pathsless land. The air, as it seemed to them, grew harsh, and filled with a bitter reek that caught their breath and parched their mouths.",
      "The gasping pools were choked with ash and crawling muds, sickly white and grey, as if the mountains had vomitted the filth of their entrails upon the lands about. High mounds of crushed and powdered rock, great cones of earth fire-blasted and poison-stained, stood like an obscene graveyard in endless rows, slowly revealed in the reluctant light.",
      "Frodo gave a cry, and there was, fallen upon his knees at the chasm's edge. But Gollum, dancing like a mad thing, held aloft the ring, a finger still thrust within its circle.'Precious, precious, precious!' Gollum cried.'My Precious! O my Precious!' And with that, even as his eyes were lifted up to gloat on his prize, he stepped too far, toppled, wavered for a moment on the brink, and then with a shriek he fell. Out of the depths came his last wail precious, and he was gone.",
      "In the land of Mordor, in the fires of Mount Doom, the Dark Lord Sauron forged, in secret , a Master Ring to control all others. And into this Ring he poured his cruelty , his malice and his will to dominate all life . One Ring to rule them all.",
      "The Black Rider flung back his hood, and behold! he had a kingly crown; and yet upon no head visible was it set. The red fires shone between it and the mantled shoulders vast and dark. From a mouth unseen there came a deadly laughter.'Old fool!' he said. 'Old fool! This is my hour. Do you not know Death when you see it? Die now and curse in vain!' And with that he lifted high his sword and flames ran down the blade.",
      "Cowering back against the rock they drew breath, and then they clutch at their hearts. Perching now on the wall beside the ruined gate the Nazgúl sent out its deadly cries. All the cliff echoed.",
      "There, peeping among the cloud-wrack above a dark tor high up in the mountains, Sam saw a white star twinkle for a while. The beauty of it smote his heart, as he looked up out of the forsaken land, and hope returned to him. For like a shaft, clear and cold, the thought pierced him that in the end the Shadow was only a small and passing thing: there was light and high beauty for ever beyond its reach.",
      "For the hobbits, each day, each mile, was more bitter than the one before, as their strength lessened and the land became more evil. [...] But far worse than all such perils was the ever-approaching threat that beat upon them as they went: the dreadful menace of the Power that waited, brooding in deep thought and sleepless malice behind the dark veil about its Throne.",
      "The hateful night passed slowly and reluctantly. Such daylight as followed was dim; for here as the Mountain drew near the air was ever mirky, while out from the Dark Tower there crept veils of Shadow that Sauron wove about himself.",
      "'No, I am afraid not, Sam,' said Frodo. 'At least, I know that such things happened, but I cannot see them. No taste of food, no feel of water, no sound of wind, no memory of tree or grass or flower, no image of moon or star are left to me. I am naked in the dark, Sam, and there is no veil between me and the wheel of fire. I begin to see it even with my waking eyes, and all else fades'",
      "And far away, as Frodo put on the Ring and claimed it for his own, even in Sammath Naur the very heart of his realm, the power in Barad-dúr was shaken, and the Tower trembled from its foundations to its proud and bitter crown. The Dark Lord was suddenly aware of him, and his Eye piercing all shadows looked across the plain to the door of that he had made; and the magnitude of his own folly was revealed to him in a blinding flash, and all the devices of his enemies were at last laid bare. Then his wrath blazed in consuming flame, but his fear rose like a vast black smoke to choke him. For he knew his deadly peril and the thread upon which his doom was hung.",
      "Where there's a whip there's a will, my slugs'",
      "If this nice friendliness would spread about in Mordor, half our trouble would be over.",
      "One does not simply walk into Mordor. Its black gates are guarded by more than just Orcs. There is evil there that does not sleep. The great Eye is ever watchful. It is a barren wasteland, riddled with fire, ash, and dust. The very air you breathe is a poisonous fume.",
      "I am commanded to go to the land of Mordor, and therefore I shall go,' said Frodo. 'If there is only one way, then I must take it. What comes after must come.",
      "Be careful, both of you. The Enemy has many spies in his service; birds and beasts.  Is it safe? Never put it on, for then the agents of the Dark Lord will be drawn to its power. Always remember, Frodo, the Ring is trying to get back to its master. It wants to be found.",
      " You cannot hide. I see you! There is no life in the void...only death.",
      "Build me an army worthy of Mordor.",
      "There are few who can. The language is that of Mordor, which I will not utter here.",
      " For 60 years, the Ring lay quiet in Bilbo's keeping, prolonging his life, delaying old age. But no longer, Frodo. Evil is stirring in Mordor. The Ring has awoken. It's heard its Master's call.",
      "The spirit of Sauron endured. His life-force is bound to the Ring, and the Ring survived. Sauron has returned. His Orcs have multiplied; his fortress of Barad-dûr is rebuilt in the land of Mordor. Sauron needs only this Ring to cover all the lands in a second darkness. He is seeking it. Seeking it, all his thought is bent on it, and the Ring yearns above all else to reurn the hand of its Master. They are one, the Ring and the Dark Lord. Frodo... he must never find it.",
      "There is one other who knew Bilbo had the Ring. I looked everywhere for the creature Gollum, but the enemy found him first. I don't know how long they tortured him, but admist the endless screams and inane babble, they discerned two words... Shire! Baggins!",
      "Don't... tempt me, Frodo! I dare not take it. Not even to keep it safe. Understand, Frodo, I would use this Ring from the desire to do good. But through me, it would wield a power too great and terrible to imagine.",
      "Sauron has regained much of his former strength. He cannot yet take physical form, but his spirit has lost none of its potency. Concealed within his fortress, the Lord of Mordor sees all. His gaze pierces cloud, shadow, earth, and flesh. You know of what I speak, Gandalf. A Great Eye, lidless, wreathed in flame.",
      "Against the power of Mordor, there can be no victory. We must join with him, Gandalf. We must join with Sauron. It would be wise, my friend.",
      "This evil cannot be concealed by the power of the Elves. We do not have the strength to fight both Mordor and Isengard! Gandalf, the Ring cannot stay here. This peril belongs to all Middle Earth. They must decide now how to end it. The time of the Elves is over. My people are leaving these shores. Who will you look to when we've gone? The Dwarves? They hide in their mountains, seeking riches. They care nothing for the troubles of others.",
      "Strangers from distant lands, friends of old, you have been summoned here to answer the threat of Mordor. Middle Earth stands upon the brink of destruction; none can escape it. You will unite or you will fall. Each race is bound to this fate, this one doom. Bring forth the Ring, Frodo.",
      "I do not ask for pardon, Master Elrond, for the Black Speech of Mordor may yet be heard in every corner of the West! The Ring is altogether evil.",
      "The Ring cannot be destroyed, Gimli, son of Gloin, by any craft that we here possess. The Ring was made in the fires of Mount Doom. Only there can it be unmade. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came! One of you... must do this."
    ],
    "Rivendell":[
      "Of the Three Rings that the Elves had preserved unsullied no open word was ever spoken among the Wise, and few even of the Eldar knew where they were bestowed. Yet after the fall of Sauron their power was ever at work, and where they abode there mirth also dwelt and all things were unstained by the griefs of time. Therefore ere the Third Age was ended the Elves perceived that the Ring of Sapphire was with Elrond, in the fair valley of Rivendell, upon whose house the stars of heaven most brightly shone; whereas the Ring of Adamant was in the Land of Lórien where dwelt the Lady Galadriel. A queen she was of the woodland Elves, the wife of Celeborn of Doriath, yet she herself was of the Noldor and remembered the Day before days in Valinor, and she was the mightiest and fairest of all the Elves that remained in Middle-earth. But the Red Ring remained hidden until the end, and none save Elrond and Galadriel and Cirdan knew to whom it had been committed.",
      "In all the days of the Third Age, after the fall of Gil-galad, Master Elrond abode in Imladris, and he gathered there many Elves, and other folk of wisdom and power from among all the kindreds of Middle-earth, and he preserved through many lives of Men the memory of all that had been fair; and the house of Elrond was a refuge for the weary and the oppressed, and a treasury of good counsel and wise lore. In that house were harboured the Heirs of Isildur, in childhood and old age, because of the kinship of their blood with Elrond himself, and because he knew in his wisdom that one should come of their line to whom a great part was appointed in the last deeds of that Age. And until that time came the shards of Elendil's sword were given into the keeping of Elrond, when the days of the Dúnedain darkened and they became a wandering people.",
      "What a tale we have been in, Mr. Frodo, haven't we?' he said. 'I wish I could hear it told. Do you think they'll say: Now comes the story of Nine-fingered Frodo and the ring of Doom? And then everyone will hush, like we did, when in Rivendell they told us the tale of Beren One-hand and the Great Jewel. I wish I could hear it! And I wonder how it will go on after our part.",
      "A little sleep does a great cure in the house of Elrond.",
      "His house was perfect whether you liked food, or sleep, or work, or story-telling, or singing, or just sitting and thinking best, nor a pleasant mixture of them all. Evil things did not come into that valley.",
      "'Rivendell' said Frodo. 'Very good: I will go east, and I will make for Rivendell...' He spoke lightly, but his heart was moved suddenly with a desire to see the house of Elrond Halfelven, and breathe the air of that deep valley where many of the Fair Folk still dwelt in peace.",
      "It's a big house this, and very peculiar. Always a bit more to discover, and no knowing what you'll find round a corner. And Elves, sir! Elves here, and Elves there! Some like kings, terrible and splendid; and some as merry as children. And the music and the singing...",
      "Evil things do not come into this valley... We are sitting in a fortress. Outside it is getting dark",
      "The air was warm. The sound of running and falling water was loud, and the evening was filled with a faint scent of trees and flowers, as if summer still lingered in Elrond's gardens.",
      "Time doesn't seem to pass here: it just is. A remarkable place altogether.",
      "For a while the hobbits continued to talk and think of the past journey and of the perils that lay ahead; but such was the virtue of the land of Rivendell that soon all fear and anxiety were lifted from their minds. The future, good or ill, was not forgotten, but ceased to have any power over the present.",
      "Such was the virtue of the land of Rivendell that soon all fear and anxiety was lifted from their minds. The future, good or ill, was not forgotten, but ceased to have any power over the present. Health and hope grew strong in them, and they were content with each good day as it came, taking pleasure in every meal, and in every word and song.",
      "'But that will leave no place for us!', cried Pippin in dismay. 'We don't want to be left behind. We want to go with Frodo.''That is because you do not understand and cannot imagine what lies ahead,' said Elrond.'Neither does Frodo,' said Gandalf, unexpectedly supporting Pippin. '[...] I think, Elrond, that in this matter it would be well to trust rather to their friendship than to great wisdom.'",
      "Aragorn sat with his head bowed to his knees; only Elrond knew fully what this hour meant to him.",
      "The Ring-Bearer is setting out on the Quest of Mount Doom. On him alone is any charge laid: neither to cast away the Ring, nor to deliver it to any Servant of the Enemy nor indeed to let any handle it, save members of the Company and the Council, and only then in gravest need. The others go with him as free companions, to help him on his way. You may tarry, or come back, or turn aside into other paths, as chance allows. The further you go, the less easy will it be to withdraw; yet no oath or bond is laid on you to go further than you will. For you do not yet know the strength of your hearts, and you cannot foresee what each may meet upon the road.",
      "His house [Elrond's] was perfect, whether you liked food, or sleep, or work, or story-telling, or singing, or just sitting and thinking best, or a pleasant mixture of them all. Evil things did not come into that valley.",
      "It was in this way that he learned where Gandalf had been to; for he overheard the words of the wizard to Elrond. It appeared that Gandalf had been to a great council of the white wizards, masters of lore and good magic; and that they had at last driven the Necromancer from his dark hold in the south of Mirkwood.",
      "'Well, Merry People!' said Bilbo looking out. 'What time by the moon is it? Your lullaby would waken a drunken goblin! Yet I thank you.' 'And your snores would waken a stone dragon - yet we thank you,' they answered with laughter.",
      "[Rivendell is a] refuge for the weary and the oppressed, and a treasury of good counsel and wise lore.",
      "O! Tril-lil-lil-lollythe valley is jolly,ha! ha!-Elves of Rivendell",
      "An overwhelming longing to rest and remain at peace by Bilbo's side in Rivendell filled all his heart. At last with an effort he spoke, and wondered to hear his own words, as if some other will was using his small voice. 'I will take the Ring,' he said, 'though I do not know the way.'",
      "For a while the hobbits continued to talk and think of the past journey and of the perils that lay ahead; but such was the virtue of the land of Rivendell that soon all fear and anxiety was lifted from their minds",
      "He halted amazed, thinking that he had strayed into a dream, or else that he had received the gift of the Elf-minstrels, who can make the things of which they sing appear before the eyes of those that listen.'For Aragorn had been singing a part of the The Lay of Lúthien which tells of the meeting of Lúthien and Beren in the forest of Neldoreth. And behold! there Lúthien walked before his eyes in Rivendell, clad in a mantle of silver and blue, fair as the twilight in Elven-home; her dark hair strayed in a sudden wind, and her brows were bound with gems like stars.",
      " Sam led him along several passages and down many steps and out into a high garden above the steep bank of the river. He found his friends sitting in a porch on the side of the house looking east. Shadows had fallen in the valley below, but there was still a light on the faces of the mountains far above. The air was warm. The sound of running and falling water was loud, and the evening was filled with a faint scent of trees and flowers, as if summer still lingered in Elrond's gardens.",
      "Merely to be there was a cure for weariness, fear and sadness.",
      "For the Elves, I fear, it will prove at best a truce, in which they may pass to the Sea unhindered and leave the Middle-earth for ever.",
      "'And perhaps that was the way of it,' said Frodo. 'In that land, maybe, we were in a time that is elsewhere long gone by...'",
      "Legolas stirred in his boat. 'Nay, time does not tarry ever,' he said; 'but change and growth is not in all things and places alike.'",
      "Frodo: Packed already? Sam: No harm in being prepared. Frodo: I thought you wanted to see the Elves, Sam? Sam: I do. Frodo: more than anything. Sam: I did, it’s just… We did what Gandalf wanted, didn’t we? We got the Ring this far, to Rivendell. And I thought, seeing as how you are on the mend, we’d be off soon. Off home. Frodo: You’re right, Sam. We did what we set out to do. The Ring will be safe in Rivendell. I am ready to go home.",
      "But so far my only thought has been to get here; and I hope I shan’t have to go any further. It is very pleasant just to rest.",
      "... [there was] a golden mist above the seas of foam that sighed upon the margins of the world.",
      "His hair was dark as the shadows of twilight, and upon it was set a circlet of silver; his eyes were grey as clear evening, and in them was a light like the light of stars. Venerable he seemed as a king crowned with many winters, and yet hale as a tried warrior in the fullness of his strength.",
      "... [He stood] tall and straight; his hair was of shining gold, his face fair and young and fearless and full of joy; his eyes were bright and keen, and his voice like music; on his brow sat wisdom, in his hand was strength.",
      "Yes [Frodo], you are safe for the present."
    ]
  }