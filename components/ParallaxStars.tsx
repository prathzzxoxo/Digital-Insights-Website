"use client";

export default function ParallaxStars() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <style jsx>{`
        #stars,
        #stars2,
        #stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        #stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 1755px 1983px #FFF, 347px 1820px #FFF, 1636px 1401px #FFF, 1024px 1105px #FFF,
            561px 1703px #FFF, 663px 1422px #FFF, 1189px 771px #FFF, 1060px 1754px #FFF,
            1819px 1486px #FFF, 1619px 1018px #FFF, 1057px 1673px #FFF, 964px 930px #FFF,
            300px 450px #FFF, 1200px 800px #FFF, 600px 1200px #FFF, 1500px 300px #FFF,
            800px 1600px #FFF, 200px 900px #FFF, 1700px 1100px #FFF, 400px 600px #FFF,
            1100px 1900px #FFF, 900px 200px #FFF, 1400px 1500px #FFF, 500px 1000px #FFF,
            1850px 650px #FFF, 450px 1350px #FFF, 1250px 250px #FFF, 750px 1750px #FFF,
            1950px 950px #FFF, 350px 550px #FFF, 1550px 1250px #FFF, 950px 1450px #FFF,
            150px 750px #FFF, 1650px 350px #FFF, 850px 1050px #FFF, 50px 1550px #FFF,
            1450px 550px #FFF, 550px 850px #FFF, 1350px 1650px #FFF, 650px 150px #FFF,
            1750px 1850px #FFF, 250px 1150px #FFF, 1050px 450px #FFF, 1150px 1550px #FFF,
            420px 980px #FFF, 1320px 420px #FFF, 720px 1620px #FFF, 1820px 1220px #FFF,
            520px 220px #FFF, 1520px 820px #FFF, 920px 1420px #FFF, 220px 1820px #FFF,
            1220px 620px #FFF, 620px 1020px #FFF, 1920px 1320px #FFF, 320px 720px #FFF,
            125px 375px #FFF, 1875px 1625px #FFF, 875px 625px #FFF, 1375px 125px #FFF,
            625px 1875px #FFF, 375px 875px #FFF, 1625px 1375px #FFF, 1125px 375px #FFF,
            175px 1125px #FFF, 1425px 675px #FFF, 925px 1925px #FFF, 1675px 425px #FFF,
            425px 1175px #FFF, 1175px 925px #FFF, 675px 1425px #FFF, 1925px 175px #FFF,
            75px 825px #FFF, 1575px 1075px #FFF, 1075px 325px #FFF, 575px 1575px #FFF,
            325px 75px #FFF, 1825px 1825px #FFF, 275px 525px #FFF, 1725px 775px #FFF,
            775px 1275px #FFF, 1275px 1725px #FFF, 525px 275px #FFF, 1025px 1775px #FFF,
            25px 1025px #FFF, 1525px 25px #FFF, 725px 1525px #FFF, 1975px 725px #FFF,
            475px 1975px #FFF, 975px 475px #FFF, 1475px 975px #FFF, 225px 1475px #FFF,
            1775px 225px #FFF, 825px 1075px #FFF, 1325px 825px #FFF, 135px 1325px #FFF,
            1635px 135px #FFF, 385px 1635px #FFF, 1885px 385px #FFF, 635px 1885px #FFF;
          animation: animStar 50s linear infinite;
        }

        #stars:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 1755px 1983px #FFF, 347px 1820px #FFF, 1636px 1401px #FFF, 1024px 1105px #FFF,
            561px 1703px #FFF, 663px 1422px #FFF, 1189px 771px #FFF, 1060px 1754px #FFF,
            1819px 1486px #FFF, 1619px 1018px #FFF, 1057px 1673px #FFF, 964px 930px #FFF,
            300px 450px #FFF, 1200px 800px #FFF, 600px 1200px #FFF, 1500px 300px #FFF,
            800px 1600px #FFF, 200px 900px #FFF, 1700px 1100px #FFF, 400px 600px #FFF,
            1100px 1900px #FFF, 900px 200px #FFF, 1400px 1500px #FFF, 500px 1000px #FFF,
            1850px 650px #FFF, 450px 1350px #FFF, 1250px 250px #FFF, 750px 1750px #FFF,
            1950px 950px #FFF, 350px 550px #FFF, 1550px 1250px #FFF, 950px 1450px #FFF,
            150px 750px #FFF, 1650px 350px #FFF, 850px 1050px #FFF, 50px 1550px #FFF,
            1450px 550px #FFF, 550px 850px #FFF, 1350px 1650px #FFF, 650px 150px #FFF,
            1750px 1850px #FFF, 250px 1150px #FFF, 1050px 450px #FFF, 1150px 1550px #FFF,
            420px 980px #FFF, 1320px 420px #FFF, 720px 1620px #FFF, 1820px 1220px #FFF,
            520px 220px #FFF, 1520px 820px #FFF, 920px 1420px #FFF, 220px 1820px #FFF,
            1220px 620px #FFF, 620px 1020px #FFF, 1920px 1320px #FFF, 320px 720px #FFF,
            125px 375px #FFF, 1875px 1625px #FFF, 875px 625px #FFF, 1375px 125px #FFF,
            625px 1875px #FFF, 375px 875px #FFF, 1625px 1375px #FFF, 1125px 375px #FFF,
            175px 1125px #FFF, 1425px 675px #FFF, 925px 1925px #FFF, 1675px 425px #FFF,
            425px 1175px #FFF, 1175px 925px #FFF, 675px 1425px #FFF, 1925px 175px #FFF,
            75px 825px #FFF, 1575px 1075px #FFF, 1075px 325px #FFF, 575px 1575px #FFF,
            325px 75px #FFF, 1825px 1825px #FFF, 275px 525px #FFF, 1725px 775px #FFF,
            775px 1275px #FFF, 1275px 1725px #FFF, 525px 275px #FFF, 1025px 1775px #FFF,
            25px 1025px #FFF, 1525px 25px #FFF, 725px 1525px #FFF, 1975px 725px #FFF,
            475px 1975px #FFF, 975px 475px #FFF, 1475px 975px #FFF, 225px 1475px #FFF,
            1775px 225px #FFF, 825px 1075px #FFF, 1325px 825px #FFF, 135px 1325px #FFF,
            1635px 135px #FFF, 385px 1635px #FFF, 1885px 385px #FFF, 635px 1885px #FFF;
        }

        #stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 779px 1521px #FFF, 324px 665px #FFF, 636px 1270px #FFF, 1074px 955px #FFF,
            1567px 778px #FFF, 1190px 1894px #FFF, 1869px 1516px #FFF, 1853px 1001px #FFF,
            250px 1750px #FFF, 1450px 450px #FFF, 850px 1350px #FFF, 1650px 950px #FFF,
            1234px 567px #FFF, 890px 1678px #FFF, 456px 234px #FFF, 1678px 890px #FFF,
            567px 1234px #FFF, 1345px 678px #FFF, 789px 1456px #FFF, 234px 890px #FFF,
            1456px 345px #FFF, 678px 1567px #FFF, 1567px 234px #FFF, 345px 1678px #FFF,
            1789px 456px #FFF, 123px 1345px #FFF, 1012px 789px #FFF, 678px 123px #FFF,
            145px 1545px #FFF, 1545px 145px #FFF, 945px 1345px #FFF, 445px 745px #FFF,
            1745px 1945px #FFF, 1345px 545px #FFF, 545px 1145px #FFF, 1945px 345px #FFF,
            745px 1745px #FFF, 1145px 1045px #FFF, 345px 445px #FFF, 1845px 1645px #FFF,
            645px 845px #FFF, 1045px 1445px #FFF, 1645px 645px #FFF, 845px 45px #FFF,
            45px 1645px #FFF, 1445px 845px #FFF, 295px 1295px #FFF, 1795px 595px #FFF,
            595px 1795px #FFF, 995px 995px #FFF, 1395px 1395px #FFF, 195px 795px #FFF,
            1895px 195px #FFF, 495px 1495px #FFF, 1595px 1695px #FFF, 1695px 1895px #FFF;
          animation: animStar 100s linear infinite;
        }

        #stars2:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 779px 1521px #FFF, 324px 665px #FFF, 636px 1270px #FFF, 1074px 955px #FFF,
            1567px 778px #FFF, 1190px 1894px #FFF, 1869px 1516px #FFF, 1853px 1001px #FFF,
            250px 1750px #FFF, 1450px 450px #FFF, 850px 1350px #FFF, 1650px 950px #FFF,
            1234px 567px #FFF, 890px 1678px #FFF, 456px 234px #FFF, 1678px 890px #FFF,
            567px 1234px #FFF, 1345px 678px #FFF, 789px 1456px #FFF, 234px 890px #FFF,
            1456px 345px #FFF, 678px 1567px #FFF, 1567px 234px #FFF, 345px 1678px #FFF,
            1789px 456px #FFF, 123px 1345px #FFF, 1012px 789px #FFF, 678px 123px #FFF,
            145px 1545px #FFF, 1545px 145px #FFF, 945px 1345px #FFF, 445px 745px #FFF,
            1745px 1945px #FFF, 1345px 545px #FFF, 545px 1145px #FFF, 1945px 345px #FFF,
            745px 1745px #FFF, 1145px 1045px #FFF, 345px 445px #FFF, 1845px 1645px #FFF,
            645px 845px #FFF, 1045px 1445px #FFF, 1645px 645px #FFF, 845px 45px #FFF,
            45px 1645px #FFF, 1445px 845px #FFF, 295px 1295px #FFF, 1795px 595px #FFF,
            595px 1795px #FFF, 995px 995px #FFF, 1395px 1395px #FFF, 195px 795px #FFF,
            1895px 195px #FFF, 495px 1495px #FFF, 1595px 1695px #FFF, 1695px 1895px #FFF;
        }

        #stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: 1446px 1728px #FFF, 1014px 879px #FFF, 1364px 1411px #FFF, 1842px 1805px #FFF,
            1618px 770px #FFF, 550px 1550px #FFF, 1250px 650px #FFF, 1750px 1450px #FFF,
            987px 1234px #FFF, 1567px 432px #FFF, 432px 1765px #FFF, 1876px 987px #FFF,
            765px 543px #FFF, 1321px 1098px #FFF, 654px 1432px #FFF, 1543px 321px #FFF,
            321px 1654px #FFF, 1765px 765px #FFF, 876px 1876px #FFF, 1098px 654px #FFF;
          animation: animStar 150s linear infinite;
        }

        #stars3:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: 1446px 1728px #FFF, 1014px 879px #FFF, 1364px 1411px #FFF, 1842px 1805px #FFF,
            1618px 770px #FFF, 550px 1550px #FFF, 1250px 650px #FFF, 1750px 1450px #FFF,
            987px 1234px #FFF, 1567px 432px #FFF, 432px 1765px #FFF, 1876px 987px #FFF,
            765px 543px #FFF, 1321px 1098px #FFF, 654px 1432px #FFF, 1543px 321px #FFF,
            321px 1654px #FFF, 1765px 765px #FFF, 876px 1876px #FFF, 1098px 654px #FFF;
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </>
  );
}
