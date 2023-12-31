var PeriodTable = [
		{name: "3*2", id: "6"},
		{name: "4*2", id: "8"},
		{name: "1*5", id: "5"},
		{name: "9*0", id: "0"},
		{name: "5*5", id: "25"},
		{name: "4*6", id: "24"},
		{name: "11*9", id: "99"},
		{name: "2*8", id: "16"},
		{name: "8*8", id: "64"},
		{name: "14*16", id: "224"},
		{name: "15*15", id: "225"},
		{name: "35*35", id: "1225"},//medium
		{name: "42*48", id: "2016"},
		{name: "45*45", id: "2025"},
		{name: "47*43", id: "2021"},
		{name: "53*57", id: "3021"},
		{name: "56*54", id: "3024"},
		{name: "59*51", id: "3009"},
		{name: "61*69", id: "4209"},
		{name: "63*67", id: "4221"},
		{name: "65*65", id: "4225"},
		{name: "68*62", id: "4216"}
		
];

/*****
 * 
	{name: "77 x 73", id: "5621"},
	{name: "92 x 98", id: "9016"},
	{name: "102 x 108", id: "11016"},
	{name: "113 x 117", id: "13221"},
	{name: "34 x 36", id: "1224"},
	{name: "71 x 79", id: "5609"},
	{name: "38 x 32", id: "1216"},
	{name: "97 x 93", id: "9021"}
 * 	12 x 18=216
2.	15 x 15=225
3.	24 x 26=624
4.	56 x 54=3024
5.	48 x 42=2016
6.	39 x 31=1209
7.	67 x 63=4221
8.	44 x 46=2024
9.	77 x 73=5621
10.	92 x 98=9016
11.	102 x 108=11016
12.	113 x 117=13221
13.	34 x 36=1224
14.	71 x 79=5609
15.	38 x 32=1216
16.	97 x 93= 9021
var PeriodTable = [
	{name: "Actínio", id: "Ac"},
	{name: "Prata", id: "Ag"},
	{name: "Alumínio", id: "Al"},
	{name: "Amerício", id: "Am"},
	{name: "Argônio", id: "Ar"},
	{name: "Arsénio", id: "As"},
	{name: "Ástato", id: "At"},
	{name: "Ouro", id: "Au"},
	{name: "Boro", id: "B"},
	{name: "Bário", id: "Ba"},
	{name: "Berílio", id: "Be"},
	{name: "Bóhrio", id: "Bh"},
	{name: "Bismuto", id: "Bi"},
	{name: "Berquélio", id: "Bk"},
	{name: "Bromo", id: "Br"},
	{name: "Carbono", id: "C"},
	{name: "Cálcio", id: "Ca"},
	{name: "Cádmio", id: "Cd"},
	{name: "Cério", id: "Ce"},
	{name: "Califórnio", id: "Cf"},
	{name: "Cloro", id: "Cl"},
	{name: "Cúrio", id: "Cm"},
	{name: "Copernício", id: "Cn"},
	{name: "Cobalto", id: "Co"},
	{name: "Cromo", id: "Cr"},
	{name: "Césio", id: "Cs"},
	{name: "Cobre", id: "Cu"},
	{name: "Dúbnio", id: "Db"},
	{name: "Darmstácio", id: "Ds"},
	{name: "Diprósio", id: "Dy"},
	{name: "Érbio", id: "Er"},
	{name: "Einstênio", id: "Es"},
	{name: "Európio", id: "Eu"},
	{name: "Fluor", id: "F"},
	{name: "Ferro", id: "Fe"},
	{name: "Flevório", id: "Fl"},
	{name: "Férmio", id: "Fm"},
	{name: "Frâncio", id: "Fr"},
	{name: "Gálio", id: "Ga"},
	{name: "Gadolínio", id: "Gd"},
	{name: "Germânio", id: "Ge"},
	{name: "Hidrogênio", id: "H"},
	{name: "Hélio", id: "He"},
	{name: "Háfnio", id: "Hf"},
	{name: "Hólmio", id: "Ho"},
	{name: "Hácio", id: "Hs"},
	{name: "Iodo", id: "I"},
	{name: "Índio", id: "In"},
	{name: "Irídio", id: "Ir"},
	{name: "Potássio", id: "K"},
	{name: "Criptônio", id: "Kr"},
	{name: "Lantânio", id: "La"},
	{name: "Lítio", id: "Li"},
	{name: "Laurêncio", id: "Lr"},
	{name: "Lutécio", id: "Lu"},
	{name: "Livermório", id: "Lv"},
	{name: "Mendelévio", id: "Md"},
	{name: "Magnésio", id: "Mg"},
	{name: "Manganês", id: "Mn"},
	{name: "Molibdénio", id: "Mo"},
	{name: "Meitnério", id: "Mt"},
	{name: "Nitrogêio", id: "N"},
	{name: "Sódio", id: "Na"},
	{name: "Nióbio", id: "Nb"},
	{name: "Neodímio", id: "Nd"},
	{name: "Neônio", id: "Ne"},
	{name: "Níquel", id: "Ni"},
	{name: "Nobélio", id: "No"},
	{name: "Netúnio", id: "Np"},
	{name: "Oxigênio", id: "O"},
	{name: "Ósmio", id: "Os"},
	{name: "Fósforo", id: "P"},
	{name: "Protactínio", id: "Pa"},
	{name: "Chumbo", id: "Pb"},
	{name: "Paládio", id: "Pd"},
	{name: "Promécio", id: "Pm"},
	{name: "Polônio", id: "Po"},
	{name: "Praseodímio", id: "Pr"},
	{name: "Platina", id: "Pt"},
	{name: "Plutônio", id: "Pu"},
	{name: "Rádio", id: "Ra"},
	{name: "Rubídio", id: "Rb"},
	{name: "Rênio", id: "Re"},
	{name: "Rutherfórdio", id: "Rf"},
	{name: "Roentgênio", id: "Rg"},
	{name: "Ródio", id: "Rh"},
	{name: "Radônio", id: "Rn"},
	{name: "Rutênio", id: "Ru"},
	{name: "Enxofre", id: "S"},
	{name: "Antimônio", id: "Sb"},
	{name: "Escândio", id: "Sc"},
	{name: "Selênio", id: "Se"},
	{name: "Seabórgio", id: "Sg"},
	{name: "Silício", id: "Si"},
	{name: "Samário", id: "Sm"},
	{name: "Estanho", id: "Sn"},
	{name: "Estrôncio", id: "Sr"},
	{name: "Tântalo", id: "Ta"},
	{name: "Térbio", id: "Tb"},
	{name: "Tecnécio", id: "Tc"},
	{name: "Telúrio", id: "Te"},
	{name: "Tório", id: "Th"},
	{name: "Titânio", id: "Ti"},
	{name: "Tálio", id: "Tl"},
	{name: "Túlio", id: "Tm"},
	{name: "Urânio", id: "U"},
	{name: "Ununóctio", id: "Uuo"},
	{name: "Ununpêntio", id: "Uup"},
	{name: "Ununséptio", id: "Uus"},
	{name: "Unúntrio", id: "Uut"},
	{name: "Vanádio", id: "V"},
	{name: "Tungstênio", id: "W"},
	{name: "Xenônio", id: "Xe"},
	{name: "Ítrio", id: "Y"},
	{name: "Itérbio", id: "Yb"},
	{name: "Zinco", id: "Zn"},
	{name: "Zircônio", id: "Zr"}
];
******/
