
    let BBQs = [
        ['Ribs',0, 19.99,""],
        ['Chicken Wings', 0, 9.99,""],
        ['Beef',0, 19.99,""],
        ['Seafood',0, 29.99,""],
        ['Shrimps',0, 9.99,""],
        ['Vegetables',0, 1.99,""]];
    
        function orderRibs()
        {
            BBQs[0][1] = Number(prompt("How many do you want? "));
            BBQs[0][3] = prompt("How would you like your Ribs served?");
            alert("You have ordered "+BBQs[0][1]+" "+BBQs[0][0]+" served in "+BBQs[0][3]);
        }
    
        function orderChickenWings()
        {
            BBQs[1][1] = Number(prompt("How many do you want? "));
            BBQs[1][3] = prompt("How would you like your Chicken Wings served?");
            alert("You have ordered "+BBQs[1][1]+" "+BBQs[1][0]+" served in "+BBQs[1][3]);
        }
    
        function orderBeef()
        {
            BBQs[2][1] = Number(prompt("How many do you want? "));
            BBQs[2][3] = prompt("How would you like your Beef served?");
            alert("You have ordered "+BBQs[2][1]+" "+BBQs[2][0]+" served in "+BBQs[2][3]);
        }
    
        function orderSeafood()
        {
            BBQs[3][1] = Number(prompt("How many do you want? "));
            BBQs[3][3] = prompt("How would you like your Seafood served?");
            alert("You have ordered "+BBQs[3][1]+" "+BBQs[3][0]+" served in "+BBQs[3][3]);
        }
    
        function orderShrimps()
        {
            BBQs[4][1] = Number(prompt("How many do you want? "));
            BBQs[4][3] = prompt("How would you like your Shrimps served?");
            alert("You have ordered "+BBQs[4][1]+" "+BBQs[4][0]+" served in "+BBQs[4][3]);
        }
    
        function orderVegetables()
        {
            BBQs[5][1] = Number(prompt("How many do you want? "));
            BBQs[5][3] = prompt("How would you like your Vegetables served?");
            alert("You have ordered "+BBQs[5][1]+" "+BBQs[5][0]+" served in "+BBQs[5][3]);
        }