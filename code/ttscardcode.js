//library
let free = "[07FF00][b]Free:[/b] [-]This card does not cost a Move to place.";
let accessory = "[07FF00][b]Accessory:[/b] [-]This Item does not take up a Unit's item slot";
let limited = "[07FF00][b]Limited:[/b] [-]End of Round: Die/Break/Destroy this card. If this card is a Trick: End of Round: Discard this card"
let venomous = "[07FF00][b]Venomous:[/b] [-]{Stackable} On Hit: Inflict 1 Poison on the victim";
let sharp = "[07FF00][b]Sharp:[/b] [-]{Stackable} On Hit: Inflict 1 Bleed on the victim";
let alreadydead = "[07FF00][b]Already Dead:[/b] [-]On death: This Unit's death doesn't count as a death/kill";
let bleed = "[07FF00][b]Bleed:[/b] [-]{Stackable} End of Turn: Take 2 damage. Remove 1 Bleed from this Unit";
let bomb = "[07FF00][b]Bomb:[/b] [-]This Unit doesn't attack during battle. On death: Attack. On hit: Set this Unit's stats to 0 then die";
let brutal = "[07FF00][b]Brutal:[/b] [-]This Unit deals double damage. All damage dealt to this Unit is doubled";
let burn = "[07FF00][b]Burn:[/b] [-]{Stackable} End of Turn: Take 2 damage. Remove 1 Burn from this Unit";
let crippled = "[07FF00][b]Crippled:[/b] [-]This Unit has 0 ATK";
let demolisher = "[07FF00][b]Demolisher:[/b] [-]On attack: This Unit can attack Directories. Directories are destroyed in 1 hit";
let disabled = "[07FF00][b]Disabled:[/b] [-]This Unit has no abilities";
let disarmed = "[07FF00][b]Disarmed:[/b] [-]This Unit can't equip Items. Break all equipped Items";
let enraged = "[07FF00][b]Enraged:[/b] [-]On kill: If this Unit is still alive: Attack";
let fatigued = "[07FF00][b]Fatigued:[/b] [-]This Unit has -1 ATK for every card in the owner's hand";
let fiery = "[07FF00][b]Fiery:[/b] [-]{Stackable} On hit: Inflict 1 Burn on the victim";
let flight = "[07FF00][b]Flight:[/b] [-]Start of Turn: Move this Unit to another valid empty tile on this battlefield";
let flurry = "[07FF00][b]Flurry:[/b] [-]On attack: Hit the target for 1 damage for every point of ATK this Unit has instead. If the target is no longer targetable but there are still remaining ATK points during this attack: Continue attacking the next avaliable target using the remaining ATK points";
let frail = "[07FF00][b]Frail:[/b] [-]On damaged: Die. Remaining excess damage dealt to this Unit are dealt to the target behind this Unit instead";
let freeze = "[07FF00][b]Freeze:[/b] [-]{Stackable} On hit: Inflict 1 Frostbite on the victim";
let frostbite = "[07FF00][b]Frostbite:[/b] [-]{Stackable} End of Turn: Take 2 damage. Remove 1 Frostbite from this Unit";
let impenetrable = "[07FF00][b]Impenetrable:[/b] [-]This Unit is immune to damage dealt by Units with Penetration";
let lag = "[07FF00][b]Lag:[/b] [-]This Unit does not attack during battle. End of Battle: Attack";
let linked = "[07FF00][b]Linked:[/b] [-]Present Units with Linked have the same stats. When a Unit with Linked's stats gets altered: Alter ALL other Units with Linked's stats the same way Linked can carry Variable ID that can classify with each other";
let lob = "[07FF00][b]Lob:[/b] [-]On attack: The damage dealt by this Unit during this attack is dealt to the target behind it instead";
let miner = "[07FF00][b]Miner:[/b] [-]{Stackable}On hit: Draw a card";
let mystblood = "[07FF00][b]Mystblood:[/b] [-]End of Round: Downgrade this Unit";
let penetration = "[07FF00][b]Penetration:[/b] [-]This Unit attacks its target and the target bQehind it";
let poison = "[07FF00][b]Poison:[/b] [-]{Stackable} End of Turn: Take 2 damage. Remove 1 Poison from this Unit";
let snatch = "[07FF00][b]Snatch:[/b] [-]On kill: Draw all cards attached to the victim to hand";
let spread = "[07FF00][b]Spread:[/b] [-]This Unit's attacks targets its left and right lanes";
let stupid = "[07FF00][b]Stupid:[/b] [-]On attack: This Unit hits itself instead";
let targeter = "[07FF00][b]Targeter:[/b] [-]On attack: Choose an enemy target present on the opposing battlefield then attack it. If there are no avaliable targets on the opposing battlefield: This Unit's attack is cancelled";
let tower = "[07FF00][b]Tower:[/b] [-]Directories here can't be destroyed";
let walk = "[07FF00][b]Walk:[/b] [-]Once a Turn: Move this Unit to another valid empty adjacent tile on this battlefield";
let guardian = "[07FF00][b]Guardian:[/b] [-]This Unit can't be placed on Normal tiles";
let versatile = "[07FF00][b]Versatile:[/b] [-]This Unit can be placed on any tile, regardless of tile requirements";
let permanent = "[07FF00][b]Permanent:[/b] [-]On death/break/destroyed: Draw this card back to hand. If this card is a Trick: On place: Draw this card back to hand";
let useless = "[07FF00][b]Useless:[/b] [-]This card can't be placed";
let visible = "[07FF00][b]Visible:[/b] [-]This card can be seen by all Players. Once a card gains Visible, it cannot be hidden again";

//Static value for TTS code result
document.getElementById("finalresult").innerHTML = "";

//Static formatter
let evolutionheader = "[F400FF][b]Evolves into:[/b][-]";
let traitheader = "[fbbd00]-Traits-[-]";
let abilityheader = "[fbbd00]-Abilities-[-]";
let stanceheader = "[03a2ff][b]Stance: [/b][-]";
let noteheader = "[b]*NOTE:[/b] [-]";

//Static values
let evolution = "";
let trait = "";
let ability = "";
let stance = "";
let note = "";

//Function to update card
function updatecard()
{
    //Check for evolution
    if (document.getElementById("evolutions").value == "")
    {
        evolution = "";
    }
    else
    {
        //Get values
        let evolutionArray = [];
        evolution = document.getElementById("evolutions").value;
        let evolutionSplittedArray = evolution.split(',');

        //Return value
        evolution = evolutionheader + "\n";
        for (l=0; l<evolutionSplittedArray.length; l++)
        {evolutionArray[l] = '- "' + evolutionSplittedArray[l] + '"' + "\n";}
        evolution += evolutionArray.join(""); //<-- join("") on arrays removes commas
    }

    //Check for traits
    if (document.getElementById("trait").value == "")
    {
        trait = "";
    }
    else
    {
        //Get values
        let traitArray = [];
        trait = document.getElementById("trait").value;
        let traitSplittedArray = trait.split(',');
        for (l=0; l<traitSplittedArray.length; l++)
        {traitArray[l] = traitSplittedArray[l].replace(",","");}
        
        //Value compiler
        for (l=0; l<traitArray.length; l++)
        {
            switch(traitArray[l])
            {
                case "Already Dead": traitArray[l] = "\n" + alreadydead + "\n"; break;
                case "Bomb": traitArray[l] = "\n" + bomb + "\n"; break;
                case "Brutal": traitArray[l] = "\n" + brutal + "\n"; break;
                case "Crippled": traitArray[l] = "\n" + crippled + "\n"; break;
                case "Demolisher": traitArray[l] = "\n" + demolisher + "\n"; break;
                case "Disabled": traitArray[l] = "\n" + disabled + "\n"; break;
                case "Disarmed": traitArray[l] =  "\n" + disarmed + "\n"; break;
                case "Enraged": traitArray[l] = "\n" + enraged + "\n"; break;
                case "Fatigued": traitArray[l] = "\n" + fatigued + "\n"; break;
                case "Fiery": traitArray[l] = "\n" + fiery + "\n"; break;
                case "Flight": traitArray[l] = "\n" + flight + "\n"; break;
                case "Flurry": traitArray[l] = "\n" + flurry + "\n"; break;
                case "Frail": traitArray[l] = "\n" + frail + "\n"; break;
                case "Freeze": traitArray[l] = "\n" + freeze + "\n"; break;
                case "Impenetrable": traitArray[l] ="\n" + impenetrable + "\n"; break;
                case "Lag": traitArray[l] = "\n" + lag + "\n"; break;
                case "Linked": traitArray[l] = "\n" + linked + "\n"; break;
                case "Lob": traitArray[l] = "\n" + lob + "\n"; break;
                case "Miner": traitArray[l] = "\n" + miner + "\n"; break;
                case "Mystblood": traitArray[l] = "\n" + mystblood + "\n"; break;
                case "Penetration": traitArray[l] = "\n" + penetration + "\n"; break;
                case "Sharp": traitArray[l] = "\n" + sharp + "\n"; break;
                case "Snatch": traitArray[l] = "\n" + snatch + "\n"; break;
                case "Spread": traitArray[l] = "\n" + spread + "\n"; break;
                case "Stupid": traitArray[l] = "\n" + stupid + "\n"; break;
                case "Targeter": traitArray[l] = "\n" + targeter + "\n"; break;
                case "Tower": traitArray[l] = "\n" + tower + "\n"; break;
                case "Venomous": traitArray[l] = "\n" + venomous + "\n"; break;
                case "Walk": traitArray[l] = "\n" + walk + "\n"; break;
                case "Guardian": traitArray[l] = "\n" + guardian + "\n"; break;
                case "Versatile": traitArray[l] = "\n" + versatile + "\n"; break;
                case "Free": traitArray[l] = "\n" + free + "\n"; break;
                case "Limited": traitArray[l] = "\n" + limited + "\n"; break;
                case "Permanent": traitArray[l] = "\n" + permanent + "\n"; break;
                case "Useless": traitArray[l] = "\n" + useless + "\n"; break;
                case "Accessory": traitArray[l] = "\n" + accessory + "\n"; break;
                default: traitArray[l] = ""; break;
            }
        }

        //Return value
        trait = "\n" + traitheader + traitArray.join("");
    }

    //Check for abilities
    if (document.getElementById("ability").value == "")
    {
        ability = "";
    }
    else
    {
        //Get values
        let abilityArray = [];
        ability = document.getElementById("ability").value;
        let abilitySplittedArray = ability.split(',');
        for (l=0; l<abilitySplittedArray.length; l++)
        {abilityArray[l] = abilitySplittedArray[l].replace(",","");}
        
        //Value compiler
        for (l=0; l<abilityArray.length; l++)
        {
            switch(abilityArray[l])
            {
                case "Already Dead": abilityArray[l] = "\n" + alreadydead + "\n"; break;
                case "Bleed": abilityArray[l] = "\n" + bleed + "\n"; break;
                case "Bomb": abilityArray[l] = "\n" + bomb + "\n"; break;
                case "Brutal": abilityArray[l] = "\n" + brutal + "\n"; break;
                case "Burn": abilityArray[l] = "\n" + burn + "\n"; break;
                case "Crippled": abilityArray[l] = "\n" + crippled + "\n"; break;
                case "Demolisher": abilityArray[l] = "\n" + demolisher + "\n"; break;
                case "Disabled": abilityArray[l] = "\n" + disabled + "\n"; break;
                case "Disarmed": abilityArray[l] =  "\n" + disarmed + "\n"; break;
                case "Enraged": abilityArray[l] = "\n" + enraged + "\n"; break;
                case "Fatigued": abilityArray[l] = "\n" + fatigued + "\n"; break;
                case "Fiery": abilityArray[l] = "\n" + fiery + "\n"; break;
                case "Flight": abilityArray[l] = "\n" + flight + "\n"; break;
                case "Flurry": abilityArray[l] = "\n" + flurry + "\n"; break;
                case "Frail": abilityArray[l] = "\n" + frail + "\n"; break;
                case "Freeze": abilityArray[l] = "\n" + freeze + "\n"; break;
                case "Frostbite": abilityArray[l] = "\n" + frostbite + "\n"; break;
                case "Impenetrable": abilityArray[l] ="\n" + impenetrable + "\n"; break;
                case "Lag": abilityArray[l] = "\n" + lag + "\n"; break;
                case "Linked": abilityArray[l] = "\n" + linked + "\n"; break;
                case "Lob": abilityArray[l] = "\n" + lob + "\n"; break;
                case "Miner": abilityArray[l] = "\n" + miner + "\n"; break;
                case "Mystblood": abilityArray[l] = "\n" + mystblood + "\n"; break;
                case "Penetration": abilityArray[l] = "\n" + penetration + "\n"; break;
                case "Poison": abilityArray[l] = "\n" + poison + "\n"; break;
                case "Sharp": abilityArray[l] = "\n" + sharp + "\n"; break;
                case "Snatch": abilityArray[l] = "\n" + snatch + "\n"; break;
                case "Spread": abilityArray[l] = "\n" + spread + "\n"; break;
                case "Stupid": abilityArray[l] = "\n" + stupid + "\n"; break;
                case "Targeter": abilityArray[l] = "\n" + targeter + "\n"; break;
                case "Tower": abilityArray[l] = "\n" + tower + "\n"; break;
                case "Venomous": abilityArray[l] = "\n" + venomous + "\n"; break;
                case "Walk": abilityArray[l] = "\n" + walk + "\n"; break;
                case "Guardian": abilityArray[l] = "\n" + guardian + "\n"; break;
                case "Versatile": abilityArray[l] = "\n" + versatile + "\n"; break;
                case "Free": abilityArray[l] = "\n" + free + "\n"; break;
                case "Limited": abilityArray[l] = "\n" + limited + "\n"; break;
                case "Permanent": abilityArray[l] = "\n" + permanent + "\n"; break;
                case "Useless": abilityArray[l] = "\n" + useless + "\n"; break;
                case "Accessory": abilityArray[l] = "\n" + accessory + "\n"; break;
                case "Visible": abilityArray[l] = "\n" + visible + "\n"; break;
                default: abilityArray[l] = ""; break;
            }
        }

        //Return value
        ability = "\n" + abilityheader + abilityArray.join("");
    }

    //Check for stances
    if (document.getElementById("stance").value == "")
    {
        stance = "";
    }
    else
    {
        //Get values
        let stanceArray = [];
        stance = document.getElementById("stance").value;
        let stanceSplittedArray = stance.split(',');
        for (l=0; l<stanceSplittedArray.length; l++)
        {stanceArray[l] = stanceSplittedArray[l].replace(",","");}
        
        //Value compiler
        for (l=0; l<stanceArray.length; l++)
        {
            switch(stanceArray[l])
            {
                case "Already Dead": stanceArray[l] = "\n" + alreadydead + "\n"; break;
                case "Bleed": stanceArray[l] = "\n" + bleed + "\n"; break;
                case "Bomb": stanceArray[l] = "\n" + bomb + "\n"; break;
                case "Brutal": stanceArray[l] = "\n" + brutal + "\n"; break;
                case "Burn": stanceArray[l] = "\n" + burn + "\n"; break;
                case "Crippled": stanceArray[l] = "\n" + crippled + "\n"; break;
                case "Demolisher": stanceArray[l] = "\n" + demolisher + "\n"; break;
                case "Disabled": stanceArray[l] = "\n" + disabled + "\n"; break;
                case "Disarmed": stanceArray[l] =  "\n" + disarmed + "\n"; break;
                case "Enraged": stanceArray[l] = "\n" + enraged + "\n"; break;
                case "Fatigued": stanceArray[l] = "\n" + fatigued + "\n"; break;
                case "Fiery": stanceArray[l] = "\n" + fiery + "\n"; break;
                case "Flight": stanceArray[l] = "\n" + flight + "\n"; break;
                case "Flurry": stanceArray[l] = "\n" + flurry + "\n"; break;
                case "Frail": stanceArray[l] = "\n" + frail + "\n"; break;
                case "Freeze": stanceArray[l] = "\n" + freeze + "\n"; break;
                case "Frostbite": stanceArray[l] = "\n" + frostbite + "\n"; break;
                case "Impenetrable": stanceArray[l] ="\n" + impenetrable + "\n"; break;
                case "Lag": stanceArray[l] = "\n" + lag + "\n"; break;
                case "Linked": stanceArray[l] = "\n" + linked + "\n"; break;
                case "Lob": stanceArray[l] = "\n" + lob + "\n"; break;
                case "Miner": stanceArray[l] = "\n" + miner + "\n"; break;
                case "Mystblood": stanceArray[l] = "\n" + mystblood + "\n"; break;
                case "Penetration": stanceArray[l] = "\n" + penetration + "\n"; break;
                case "Poison": stanceArray[l] = "\n" + poison + "\n"; break;
                case "Sharp": stanceArray[l] = "\n" + sharp + "\n"; break;
                case "Snatch": stanceArray[l] = "\n" + snatch + "\n"; break;
                case "Spread": stanceArray[l] = "\n" + spread + "\n"; break;
                case "Stupid": stanceArray[l] = "\n" + stupid + "\n"; break;
                case "Targeter": stanceArray[l] = "\n" + targeter + "\n"; break;
                case "Tower": stanceArray[l] = "\n" + tower + "\n"; break;
                case "Venomous": stanceArray[l] = "\n" + venomous + "\n"; break;
                case "Walk": stanceArray[l] = "\n" + walk + "\n"; break;
                case "Guardian": stanceArray[l] = "\n" + guardian + "\n"; break;
                case "Versatile": stanceArray[l] = "\n" + versatile + "\n"; break;
                case "Free": stanceArray[l] = "\n" + free + "\n"; break;
                case "Limited": stanceArray[l] = "\n" + limited + "\n"; break;
                case "Permanent": stanceArray[l] = "\n" + permanent + "\n"; break;
                case "Useless": stanceArray[l] = "\n" + useless + "\n"; break;
                case "Accessory": stanceArray[l] = "\n" + accessory + "\n"; break;
                case "Visible": stanceArray[l] = "\n" + visible + "\n"; break;
                default: stanceArray[l] = ""; break;
            }
        }

        //Return value
        stance = "\n" + stanceheader + stanceArray.join("");
    }

    //Check for notes
    if (document.getElementById("note").value == "")
    {
        note = "";
    }
    else
    {
        note = "\n" + noteheader + document.getElementById("note").value;
    }

    //Output based on values above
    document.getElementById("finalresult").innerHTML = evolution + trait + ability + stance + note;
}