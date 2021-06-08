const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, signAndPack32, signAndPack45, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('CY', async () => {
  it('should verify CY_2DCode_raw_6', async () => {
    const HC1 = 'HC1:6BFU70H90T9WTWGSLKC 4D593PKQFGFVUY+6FBBWK0FN0*KCKQEWY09AC5HI*706N8D97TK0F90$PC5$CUZCY$5Y$5TPCBEC7ZKW.C:-CSED%$ERVDW.C8WEUY9 09AY8 JC5/DY+8CECOPCJQEU3EI3DBWE2+8NB8ZM8UNAS1AGVC*JC1A6FA73W5Y96F46KECTHG4KCD3DX47B46IL6646H*6Z/E5JD%96IA7B46646VX6Q$D.UDRYA 96NF6L/5SW6Y57B$D% D3IA4W5646646/96OA7XJC$+D3KC.SCXJCCWENF6OF63W59%6846WJCT3E6N8%JCYQEHZ95/D QEALEN44:+C%69AECAWEWJC0FD4:473DSDDF+AKG7RCB5C9/A7957X47769-S9%6A6C9-*93R60T9BC9CH99L627BFMB*UUKDCWN9VKP+E7.KTBU8+T09JM019 HL.BGEEU98QMZO6PE:1JLZEZ/LJP7.P8G*BV1PB/8ZM54%M.5QD.K44MP5GGM3P8C.VF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Miguel', 'fnt': 'MIGUEL', 'gn': 'Francisco', 'gnt': 'FRANCISCO'}, 'dob': '1990-01-09', 'v': [{'tg': '840539006', 'vp': '1119305005', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100001699', 'dn': 2, 'sd': 2, 'dt': '2021-06-02', 'co': 'CY', 'is': 'Ministry of Health', 'ci': 'dgci:V1:CY:IR9L8I84HFLFPNISN548LJIXJ:30'}]});
  });

  it('should verify CY_2DCode_raw_7', async () => {
    const HC1 = 'HC1:6BFOXN%TSMAHN-H/N8KMQ8/8.:91 P/R84KF2FCIJ9+$VZT78WAY5SV9TXTI5K4SA3/-2E%5G%5TW5A 6YO6XL6Q3QR$P*NIV1JIZT-8B*ZJWFL8UJ8/BGOJ ZJ83B8$TR63Y.TVBD3$T*+3LTTLZI99JO.A3DJKYJ.ZJ08KZ0KYPIA+2/JT6%T$.T08K5OI9YI:8D+FD%PD5DL%9DDAB2DNAHLW 70SO:GOLIROGO3T5ZXK9UO GOP*OSV8WP4R/5UYP.28XYQ/HQBCQU96:/6F0P3IRPS4V77ZJ82HPPEPHCR6W9RDOT*OYGO.20G%UBT1%OKPJA5EQJ-HVPI5$0JCA1W4/GJI+C7*4M:KCY05B9QIPMB4O-O4IJXKTAMP8EF/HL*E1YE9/MVE1C3ZCH13H0D3ZCL4JMYAZ+S-A5$XKX6TVTCZW4P-AK.GNNVR*G0C7/JBA93%A75HB:U8LI3FCN$RV-Z88LJWBJ4DJ7PN*M04RVWJB0JNO572J6E+70ZSCDWS:NQZ0/TJ2%O6 A0%59-SA9MUOT8ZE9D7109T4I/BQWF1M42JZB:5DZY9DFVTSD4ET3%V:+COJU+ HKFLR2G73K/E73*A:DI';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Garcia Miguel', 'fnt': 'GARCIA<MIGUEL', 'gn': 'Francisco', 'gnt': 'FRANCISCO'}, 'dob': '1990-01-10', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'nm': 'COVID19NAA', 'ma': '1304', 'sc': '2021-06-07T10:00:00.110Z', 'dr': '2021-06-07T10:30:00.701Z', 'tr': '260415000', 'tc': 'Testing center 1', 'co': 'CY', 'is': 'Ministry of Health', 'ci': 'URN:UVCI:V1:CY:PYE1LE1O2X54P5845G8RRMM9JE'}]});
  });

  it('should verify CY_2DCode_raw_8', async () => {
    const HC1 = 'HC1:6BFOXN%TSMAHN-H/N8KMQ8/8.:91 P1V8ELBXG41U6RVFTSJ5TOAKLMA3BXJPV5-FJLF6EB9UM97H98$QJEQ8999Q9E$BDZIE9J5+JFZI 7K*IJC0J*PI /TA.SVEUVIJ92K+NT:5JSVB49BZIJ:ZJ83BUPTU9TET3Z63+NTWZJ$7K+ CUEDRCK*9C.PDJYJ6+Q4U77Q4UYQD*O%+Q.SQBDO4C53752HPPEPHCRTWA7DON95U/3J$EZ.CGHIG.CZ.C4C96+KA0G6LG9KDG+92+8PG9OVA$83A C8B5C3DNR006JJJK4OI YJXV2XBDSQ3%2TZC27BCHPCB 3TZ2/8U:2TN8TRPT8LT49UX3EY CIH24GUG7GR5B0ZLU4DL:5ALRMLKV$R3ANIOBHE6/WQ42WW7J1/R$1UM2AC-6E:KN1GUO7LQU4UUZBTO7JLN5UQQJVMA%FOLQ2KHBK6P033H05XHS1F';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Karaoli', 'fnt': 'KARAOLI', 'gn': 'Anastasia', 'gnt': 'ANASTASIA'}, 'dob': '1990-01-23', 'r': [{'tg': '840539006', 'fr': '2021-05-02', 'co': 'CY', 'is': 'Ministry of Health', 'df': '2021-06-02', 'du': '2021-12-02', 'ci': 'dgci:V1:CY:JDXP4L47UVVWHJMFBIJIGWNO6:44'}]});
  });

  it('should verify CY_2DCode_raw_5', async () => {
    const HC1 = 'HC1:6BFU70H90T9WTWGSLKC 4D593PKQFGFVUY+6FBBWK0FN0*KCXMDWY09ACIDH*706N8D97TK0F90$PC5$CUZCY$5Y$5TPCBEC7ZKW.C:-CSED%$ERVDW.C8WEUY9 09AY8 JC5/DY+8CECOPCJQEU3EI3DBWE2+8NB8ZM8UNAS1AGVC*JC1A6FA73W5Y96F46KECTHG4KCD3DX47B46IL6646H*6Z/E5JD%96IA7B46646VX6Q$D.UDRYA 96NF6L/5SW6Y57B$D% D3IA4W5646646/96OA7XJC +D3KC.SCXJCCWENF6OF63W59%6846WJCT3E6N8%JCYQEHZ95/D QEALEN44:+C%69AECAWEWJC0FD4:473DSDDF+AKG7RCBX09469F57X%6.M8T1BCZA/96:R8H1BH7B%6A5R6%4727BUEA2QGQSO5R2D$D0MNMMK9:2PWV+*2*H5P$5E39-QTLQN6HHU0ROBK6DP.5N-KGJA4BIT3/9R318UQ%0F*3LTOM7SB3XFHWG/ CUZF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Miguel', 'fnt': 'MIGUEL', 'gn': 'Francisco', 'gnt': 'FRANCISCO'}, 'dob': '1990-01-09', 'v': [{'tg': '840539006', 'vp': '1119305005', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100001699', 'dn': 1, 'sd': 2, 'dt': '2021-06-02', 'co': 'CY', 'is': 'Ministry of Health', 'ci': 'dgci:V1:CY:GRHC8O6ECPWMUM16D3WAXOPN4:89'}]});
  });

});

