let Beverages = [
    ['Coca-Cola', ['Large', 'Medium', 'Small'], [0,0,0]],
    ['Sprite', ['Large', 'Medium', 'Small'], [0,0,0]],
    ['Orange Juice', ['Large', 'Medium', 'Small'], [0,0,0]],
    ['Coffee', ['Large', 'Medium', 'Small'], [0,0,0]],
    ['Iced-Coffee', ['Large', 'Medium', 'Small'], [0,0,0]],
    ['Cold Brew Coffee', ['Large', 'Medium', 'Small'], [0,0,0]]];

    let BeverageSelect = [];

    function addBeverage()
    {
        BeverageSelect[0] = document.getElementById('BeverageOption').value;
        BeverageSelect[1] = document.getElementById('BeverageSize').value;
        BeverageSelect[2] = Number(document.getElementById('BeverageQuantity').value);

        for (let i=0; i<Beverages.length;i++)
        {
            if (BeverageSelect[0]==Beverages[i][0])
            {
                for (let j=0; j<Beverages[i][1].length;j++)
                {
                    if (BeverageSelect[1]==Beverages[i][1][j])
                    {
                        Beverages[i][2][j]+=BeverageSelect[2];
                    }
                }
            }
        }
    }

    function updateTotal()
    {
        let DisplayBeverages = "<ul> <h4>You have Selected: </h4>"
        for(let i =0; i < Beverages.length; i++)
        {
            for (let j=0; j<Beverages[i][1].length; j++)
            {
                if (Beverages[i][2][j]!=0)
                {
                    DisplayBeverages +=  Beverages[i][0] +" - " + Beverages[i][1][j]+" - "+Beverages[i][2][j]+ "  <input type=\"button\" class=\"delFromOrder\" value=\"Delete\" onclick=\"  Beverages["+i+"][2]["+j+"]=0;updateTotal()\"><br>";
                }
            }
        }
        DisplayBeverages += "</ul>"
        document.getElementById('display').innerHTML = DisplayBeverages;
    }
