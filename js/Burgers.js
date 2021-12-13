var Burgers =[
    ['Cheese Burger',0], 
    ['Bacon Cheese Burger', 0],
    ['Double Burger', 0],
    ['Chicken Burger', 0],
    ['Fish Burger', 0],
    ['Plant Based Burger',0]];

    function addCheeseBurger()
    {
        var addCheeseBurgers = Number(document.getElementById('addCheeseBurgers').value);
        Burgers[0][1]+=addCheeseBurgers;
    }

    function addBaconCheeseBurger()
    {
        var addBaconCheeseBurgers = Number(document.getElementById('addBaconCheeseBurgers').value);
        Burgers[1][1]+=addBaconCheeseBurgers;
    }

    function addDoubleCheeseBurger()
    {
        var addDoubleBurgers = Number(document.getElementById('addDoubleBurgers').value);
        Burgers[2][1]+=addDoubleBurgers;
    }

    function addChickenBurger()
    {
        var addChickenBurgers = Number(document.getElementById('addChickenBurgers').value);
        Burgers[3][1]+=addChickenBurgers;
    }

    function addFishBurger()
    {
        var addFishBurgers = Number(document.getElementById('addFishBurgers').value);
        Burgers[4][1]+=addFishBurgers;
    }

    function addPlantBasedBurger()
    {
        var addPlantBasedBurgers = Number(document.getElementById('addPlantBasedBurgers').value);
        Burgers[5][1]+=addPlantBasedBurgers;
    }

    function updateTotal()
    {
        let DisplayBurgers = "<ul> <h4>You have Selected: </h4>"
            for(let i =0; i < Burgers.length; i++)
            {
                if (Burgers[i][1]!=0)
                {
                    DisplayBurgers += "<li>" + Burgers[i][1] +" X " + Burgers[i][0]+"</li>";
                }
            }

        document.getElementById('display').innerHTML = DisplayBurgers;
    }

    function Reset()
    {
        for(let i=0; i<Burgers.length;i++)
        {
            Burgers[i][1]=0;
        }
    }