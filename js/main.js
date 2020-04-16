let bill = [];
//******This for the new user******//
//***Objects are created to store information retrieved from html page and display to the user*******//
userRegister = () => {
    register.addEventListener("click",()=>{
        let regInfo={
            fName:user.value,
            uName:user2.value,
            emailAddr:emailadd.value,
        }
        output3.innerHTML = "<h3>Thank You for Registering</h3><br><b>Full Name:</b>" +regInfo.fName+`<br><b>Username:</b> ${regInfo.uName}<br><b>Email Address
	    :</b> ${regInfo.emailAddr}<br><b>Your information has been saved in our records, kindly login to proceed</b>`;
	    console.log(regInfo);
    });
};

//****This function is to show a summary of any book that user clicks on in action.html******//
//**The user clicks on book title id, event listener displays a summary using innerHTML****//
let action_description = () => {
    lordesc.addEventListener("click",()=>{
        lord.innerHTML += `<h4><b>Summary:</b>The Lord of the Rings is an epic high fantasy novel written by 
        English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 
        1937 fantasy novel The Hobbit, but eventually developed into a much larger work. 
        Written in stages between 1937 and 1949, The Lord of the Rings is one of the 
        best-selling novels ever written, with over 150 million copies sold.</h4>`;
        
    
    });
    lordimg.addEventListener("click",()=>{
        lord.innerHTML += `<h4><b>Summary:</b>The Lord of the Rings is an epic high fantasy novel written by 
        English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 
        1937 fantasy novel The Hobbit, but eventually developed into a much larger work. 
        Written in stages between 1937 and 1949, The Lord of the Rings is one of the 
        best-selling novels ever written, with over 150 million copies sold.</h4>`;
    });
    hpdesc.addEventListener("click",()=>{
        hp.innerHTML+= `<h4><b>Summary:</b>Harry Potter is a series of fantasy novels written by British author
         J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his
         friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of 
         Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord 
         Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing 
         body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical 
         people).</h4>`;
    });
    hpimg.addEventListener("click",()=>{
        hp.innerHTML+= `<h4><b>Summary:</b>Harry Potter is a series of fantasy novels written by British author 
        J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his
         friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School 
         of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord 
         Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing 
         body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical 
         people).</h4>`;
    });
    westerndesc.addEventListener("click",()=>{
        western.innerHTML+=`<h4><b>Summary:</b>Annals of the Western Shore, sometimes called Chronicles of the 
        Western Shore,is a young adult series by Ursula K. Le Guin. It consists of three
        books: Gifts (2004), Voices (2006), and Powers (2007). Each book has different main 
        characters and settings, but the books are linked by some recurring characters and 
        locations. </h4>`;
    });
    westernimg.addEventListener("click",()=>{
        western.innerHTML+=`<h4><b>Summary:</b>Annals of the Western Shore, sometimes called Chronicles of the 
        Western Shore,is a young adult series by Ursula K. Le Guin. It consists of three
        books: Gifts (2004), Voices (2006), and Powers (2007). Each book has different main 
        characters and settings, but the books are linked by some recurring characters and 
        locations.</h4>`;
    });
    tomdesc.addEventListener("click",()=>{
        tom.innerHTML+=`<h4><b>Summary:</b>The History of Tom Jones, a Foundling, often known simply as Tom 
        Jones, is a comic novel by English playwright and novelist Henry Fielding. It is 
        both a Bildungsroman and a picaresque novel. It was first published on 28 February 
        1749 in London, and is among the earliest English prose works to be classified as a 
        novel. It is the earliest novel mentioned by W. Somerset Maugham in his 1948 book 
        Great Novelists and Their Novels among the ten best novels of the world. It totals 
        346,747 words divided into 18 smaller books, each preceded by a discursive chapter, 
        often on topics unrelated to the book itself. It is dedicated to George Lyttleton.</h4>`;
    });
    tomimg.addEventListener("click",()=>{
        tom.innerHTML+=`<h4><b>Summary:</b>The History of Tom Jones, a Foundling, often known simply as Tom 
        Jones, is a comic novel by English playwright and novelist Henry Fielding. It is 
        both a Bildungsroman and a picaresque novel. It was first published on 28 February 
        1749 in London, and is among the earliest English prose works to be classified as a 
        novel. It is the earliest novel mentioned by W. Somerset Maugham in his 1948 book 
        Great Novelists and Their Novels among the ten best novels of the world. It totals 
        346,747 words divided into 18 smaller books, each preceded by a discursive chapter, 
        often on topics unrelated to the book itself. It is dedicated to George Lyttleton.</h4>`;
    });
    atlantisdesc.addEventListener("click",()=>{
        atlantis.innerHTML+=`<h4><b>Summary:</b>Atlantis (Ancient Greek: Ἀτλαντὶς νῆσος, "island of Atlas") is 
        a fictional island mentioned within an allegory on the hubris of nations in Plato's 
        works Timaeus and Critias, where it represents the antagonist naval power that 
        besieges "Ancient Athens", the pseudo-historic embodiment of Plato's ideal state in The
         Republic. In the story, Athens repels the Atlantean attack unlike any other nation of 
         the known world, supposedly giving testament to the superiority of Plato's concept
          of a state. The story concludes with Atlantis falling out of favor with the 
          deities and submerging into the Atlantic Ocean.</h4>`;
    });
    atlantisimg.addEventListener("click",()=>{
        atlantis.innerHTML+=`<h4><b>Summary:</b>Atlantis (Ancient Greek: Ἀτλαντὶς νῆσος, "island of Atlas") is 
        a fictional island mentioned within an allegory on the hubris of nations in Plato's 
        works Timaeus and Critias, where it represents the antagonist naval power that 
        besieges "Ancient Athens", the pseudo-historic embodiment of Plato's ideal state in The
        Republic. In the story, Athens repels the Atlantean attack unlike any other nation of 
        the known world, supposedly giving testament to the superiority of Plato's concept
        of a state. The story concludes with Atlantis falling out of favor with the 
        deities and submerging into the Atlantic Ocean.</h4>`;
    });
    subdesc.addEventListener("click",()=>{
        sub.innerHTML+=`<h4><b>Summary:</b>Subterranean is a novel by James Rollins. Beneath the ice at the 
        bottom of the Earth is a magnificent subterranean labyrinth, a place of breathtaking
        wonders – and terrors beyond imagining. A team of specialists led by archaeologist 
        Ashley Carter has been hand-picked to explore this secret place and to uncover the 
        riches it holds. But they are not the first to venture here – and those they follow did 
        not return. There are mysteries here older than humanity, and revelations that could 
        change the world. But there are also things that should not be disturbed – and a 
        devastating truth that could doom Ashley and the expedition: they are not alone. For the 
        caverns are inhabited by an entire subterranean ecosystem of primitive mammals - some 
        intelligent, others savage, all beyond the reach of today's knowledge.</h4>`;
    });
    subimg.addEventListener("click",()=>{
        sub.innerHTML+=`<h4><b>Summary:</b>Subterranean is a novel by James Rollins. Beneath the ice at the 
        bottom of the Earth is a magnificent subterranean labyrinth, a place of breathtaking
        wonders – and terrors beyond imagining. A team of specialists led by archaeologist 
        Ashley Carter has been hand-picked to explore this secret place and to uncover the 
        riches it holds. But they are not the first to venture here – and those they follow did 
        not return. There are mysteries here older than humanity, and revelations that could 
        change the world. But there are also things that should not be disturbed – and a 
        devastating truth that could doom Ashley and the expedition: they are not alone. For the 
        caverns are inhabited by an entire subterranean ecosystem of primitive mammals - some 
        intelligent, others savage, all beyond the reach of today's knowledge.</h4>`; 
    });
    yukidesc.addEventListener("click",()=>{
        yuki.innerHTML+=`<h4><b>Summary:</b>Daikaiju Yuki is an American post-apocalyptic epic fantasy kaiju 
        novel written by Raffael Coronelli. It was first published on May 30, 2017.The novel 
        is set on a far future Earth, roughly five thousand years after a global nuclear 
        holocaust and the appearance of daikaiju. It follows the character Yuki Tsubaki as 
        she becomes the human host of the kaiju Narajin and embarks on a quest to gather the 
        Pantheon Colossi, a group of five daikaiju around which the current civilization has 
        built itself, to stop a world war.</h4>`;
    });
    yukimg.addEventListener("click",()=>{
        yuki.innerHTML+=`<h4><b>Summary:</b>Daikaiju Yuki is an American post-apocalyptic epic fantasy kaiju 
        novel written by Raffael Coronelli. It was first published on May 30, 2017.The novel 
        is set on a far future Earth, roughly five thousand years after a global nuclear 
        holocaust and the appearance of daikaiju. It follows the character Yuki Tsubaki as 
        she becomes the human host of the kaiju Narajin and embarks on a quest to gather the 
        Pantheon Colossi, a group of five daikaiju around which the current civilization has 
        built itself, to stop a world war.</h4>`;
    });
    codedesc.addEventListener("click",()=>{
        code.innerHTML+=`<h4><b>Summary:</b>The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. 
        It is Brown's second novel to include the character Robert Langdon: the first was 
        his 2000 novel Angels & Demons. The Da Vinci Code follows "symbologist" Robert 
        Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris 
        causes them to become involved in a battle between the Priory of Sion and Opus Dei 
        over the possibility of Jesus Christ having been a companion to Mary Magdalene.
        The novel explores an alternative religious history, whose central plot point is that
         the Merovingian kings of France were descended from the bloodline of Jesus Christ and 
         Mary Magdalene, ideas derived from Clive Prince's The Templar Revelation (1997) and 
         books by Margaret Starbird. The book also refers to The Holy Blood and the Holy 
         Grail (1982) though Dan Brown has stated that it was not used as research material.</h4>`;
    });
    codeimg.addEventListener("click",()=>{
        code.innerHTML+=`<h4><b>Summary:</b>The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. 
        It is Brown's second novel to include the character Robert Langdon: the first was 
        his 2000 novel Angels & Demons. The Da Vinci Code follows "symbologist" Robert 
        Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris 
        causes them to become involved in a battle between the Priory of Sion and Opus Dei 
        over the possibility of Jesus Christ having been a companion to Mary Magdalene.
        The novel explores an alternative religious history, whose central plot point is that
        the Merovingian kings of France were descended from the bloodline of Jesus Christ and 
        Mary Magdalene, ideas derived from Clive Prince's The Templar Revelation (1997) and 
        books by Margaret Starbird. The book also refers to The Holy Blood and the Holy 
        Grail (1982) though Dan Brown has stated that it was not used as research material.</h4>`; 
    });
    hungerdesc.addEventListener("click",()=>{
        hunger.innerHTML+=`<h4><b>Summary:</b>The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. 
        It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic 
        nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control 
        over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 
        from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised 
        battle royale to the death. The book received critical acclaim from major reviewers and authors. It was 
        praised for its plot and character development.</h4>`;
    });
    hungerimg.addEventListener("click",()=>{
      
        hunger.innerHTML+=`<h4><b>Summary:</b>The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. 
        It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic 
        nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control 
        over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 
        from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised 
        battle royale to the death. The book received critical acclaim from major reviewers and authors. It was 
        praised for its plot and character development.</h4> `;
    });
};
//********This adds the user's preferred price to an array called bill after retrieving that value from textbox and displays a confirmation message that item has been added****//
let addtocart = () =>{
    cost1.addEventListener("click",()=>{
        y = parseInt(price1.value);
        bill.push(y);
        bill1.innerHTML=`<b>This item for $ ${y} has been added to the cart</b> <br><b>Charges till now ${bill}</b>`;
    });
    cost2.addEventListener("click",()=>{
        y = parseInt(price2.value);
        bill.push(y);
        bill2.innerHTML=`<b>This item for $ ${y} has been added to the cart</b> <br><b>Charges till now ${bill}</b>`;
    });
    cost3.addEventListener("click",()=>{
        y = parseInt(price3.value);
        bill.push(y);
        bill3.innerHTML=`<b>This item for $ ${y} has been added to the cart</b> <br><b>Charges till now ${bill}</b>`;
    });
}
//*******This function calculates the total of all elements in the array(cart) and shows the bill to user by using an event listener on total bill button **//
calc_bill = ()=>{
    totalbill.addEventListener("click",()=>{
        let i;
        let total = 0;
        for(i=0;i<bill.length;i++)
        {
            total+=parseFloat(bill[i]);
        }
        charges.innerHTML=`<b>You placed an order of:$ ${total}. The total amount payable is $${total} plus delivery charges</b>`;         
    });
}

//****Used for taking feedback from user. Retrieves values from textareas and displays it to user.***//
contact = ()=>{
submit.addEventListener("click", () => {
    if(emailAddr.value=="") //If user leaves this field empty then an alert is displayed to enter an email address
     {
        output4.innerHTML=`<h4>Please enter a valid email address</h4>`
     }
    else if(mList.checked) /*To check that the checkbox has been checked*/
        {
            output4.innerHTML = `<h4>Great!You have been added to our mailing list, we will get back to you at ${emailAddr.value}. Your message
            is ${message.value}.</h4>`;
            /*This message is displayed if checkbox is checked*/
        }
        else /*If the user doesn't click the checkbox then a message is displayed asking him to click*/
        {
            output4.innerHTML = `<h4>Great!we will get back to you at ${emailAddr.value}. Your message
            is ${message.value}. You do not wish to join our mailing list. Hoping to hear from you in near future.</h4>`;
        }
 });
};