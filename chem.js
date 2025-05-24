//Any object syntax in the code below was taken from W3 Schools at https://www.w3schools.com/jS/js_objects.asp
let pageList = [["unit1.html", "quiz.html", "recommend.html", "index.html", "unitsInfo.html"], ["unit2.html", "quiz.html", "recommend.html", "index.html", "unitsInfo.html"],[]];
let quizPage = document.getElementById("quiz");
let results = document.getElementById("results");
currUnit = 0;
let ans = [];
let quizCount = 0;
let amtCorrect = 0;
let newQuestions = [];
let question = {};
let counter = 0;
let quizCheck = false;
var myQuestions =
[
	[
	//Unit 1 Questions (from: https://www.sciencegeek.net/APchemistry/APtaters/Unit1Review.htm)
		{
			question: "<p>The density of mercury is 13.5939 g/cm3. Calculate the mass in kilograms of a drum full of mercury with the following dimensions: height = 1.100 meters, diameter = 0.492 meters. Assume pi has a value of 3.14.</p>",
			answers: {
			'a': '2.84 x 10<sup>6</sup> kg',
			'b': '2.84 kg',
			'c': '2.84 x 10<sup>3</sup> kg',
			'd':'2.84 x 10<sup>-3</sup> kg',
			'e':'2.09 x 10<sup>2</sup> kg',
			},
			correctAnswer: 'e',
			Unit: 1
		},
		{
			question: "<p>For which of the following compounds does 0.400 mol have a mass of 12.8 grams?</p>",
			answers: {
				'a': 'CH<sub>4</sub>',
				'b': 'CCl<sub>4</sub>',
				'c': 'CH<sub>3</sub>OH',
				'd': 'CO<sub>2</sub>',
				'e': 'C<sub>4</sub>H<sub>10</sub>'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>Benzene is a nonpolar molecule, liquid at room temperature, with a density of 0.8787 g/cm3. When mixed with water, benzene will:</p>",
			answers: {
				'a': 'float on top of the water',
				'b': 'vaporize',
				'c': 'blend with the water until the mixture appears homogeneous.',
				'd': 'sink to the bottom',
				'e': 'solidify'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>A particle with 15 protons and 18 electrons would be symbolized as:</p>",
			answers: {
				'a': 'Ar',
				'b': 'P<sup>3-</sup>',
				'c': 'Ar<sup>3-</sup>',
				'd': 'P<sup>3+</sup>',
				'e': 'Ar<sup>3+</sup>'
			},
			correctAnswer: 'b',
			Unit: 1
		},
		{
			question: "<p>Methane, CH<sub>4</sub>, and ethane, C<sub>2</sub>H<sub>6</sub> are both hydrocarbons that exist as gases at room conditions. How many grams of ethane contain the same number of molecules as 6.00 g of methane?</p>",
			answers: {
				'a': '2896 grams',
				'b': '80.5 grams',
				'c': '11.2 grams',
				'd': '.374 grams',
				'e': '0.09 grams'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>J.J. Thomson's model of the atom can be summarized with the visual image of:</p>",
			answers: {
				'a': 'planets orbiting the sun',
				'b': 'bees around a hive',
				'c': 'plum pudding',
				'd': 'none of the above',
				'e': 'a small central nucleus and an electron cloud'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>Which of following is <u>not true</u> of the carbon-14 atom?</p>",
				answers: {
				'a': 'It is the less common than carbon-12',
				'b': 'It has six electrons',
				'c': 'It has an average mass of 12.011 amu.',
				'd': 'It has six protons',
				'e': 'It has eight neutrons'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>Which of the following is an example of a pure substance?</p>",
			answers: {
				'a': 'pure water',
				'b': 'air',
				'c': 'gun powder',
				'd': 'none of these',
				'e': 'granite'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>How many significant figures are there in 0.00723 m?</p>",
			answers: {
				'a': '2',
				'b': '3',
				'c': '4',
				'd': '5',
				'e': '6'
			},
			correctAnswer: 'b',
			Unit: 1
		},
		{
			question: "<p>The correct name for MgO<sub>2</sub> is</p>",
			answers: {
				'a': 'magnesium(II) oxide',
				'b': 'magnesium oxide',
				'c': 'magnesium(IV) peroxide',
				'd': 'magnesium peroxide',
				'e': 'magnesium(IV) oxide'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>How grams of oxygen are present in a 30.0 gram sample of potassium chlorate?</p>",
			answers: {
				'a': '11.8 grams',
				'b': '3.83 grams',
				'c': '150.45 grams',
				'd': '7.83 grams',
				'e': '36.8 grams'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>A chemistry student decomposes a 78.0 gram sample of potassium chlorate, using manganese dioxide as a catalyst. Her effort yields 24.247 grams of oxygen. What is her percent yield?</p>",
			answers: {
				'a': '20.8%',
				'b': '30.1%',
				'c': '59.9%',
				'd': '79.2%',
				'e': 'The answer cannot be calculated from the information provided.'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>How many oxygen atoms are there in one formula unit of Al2(SO4)3?</p>",
			answers: {
				'a': '3',
				'b': '4',
				'c': '7',
				'd': '12',
				'e': '24'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>How many oxygen atoms are there in one formula unit of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?</p>",
			answers: {
				'a': '3',
				'b': '4',
				'c': '7',
				'd': '12',
				'e': '24'
			},
			correctAnswer: 'd'
		},
		{
			question: "<p>Methane, CH<sub>4</sub>, and ethane, C<sub>2</sub>H<sub>6</sub> are both hydrocarbons that exist as gases at room conditions. How many grams of ethane contain the same number of molecules as 6.00 g of methane?</p>",
			answers: {
			'a': '0.09 grams',
			'b': '.374 grams',
			'c': '11.2 grams',
			'd': '80.5 grams',
			'e': '2896 grams'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>18.0 grams of carbon is burned in 55.0 grams of oxygen. How many grams of carbon dioxide are formed?</p>",
			answers: {
				'a': '12.01 grams CO<sub>2</sub>',
				'b': '44.01 grams CO<sub>2</sub>',
				'c': '66.0 grams CO<sub>2</sub>',
				'd': '75.6 grams CO<sub>2</sub>',
				'e': '151 grams CO<sub>2</sub>'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>A sample of an alcohol is tested and found to contain 52% carbon, 35% oxygen, and 13% hydrogen by mass. Tests indicate that the molecular weight of the molecule is between 30 and 80. What is the molecular formula of the alcohol?</p>",
			answers: {
				'a': 'C<sub>4</sub>H<sub>9</sub>OH',
				'b': 'C<sub>5</sub>H<sub>11</sub>OH',
				'c': 'C<sub>2</sub>H<sub>5</sub>OH',
				'd': 'C<sub>3</sub>H<sub>7</sub>OH',
				'e': 'CH<sub>3</sub>OH'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>How grams of oxygen are present in a 30.0 gram sample of potassium chlorate?</p>",
			answers: {
				'a': '3.83 grams',
				'b': '7.83 grams',
				'c': '11.8 grams',
				'd': '36.8 grams',
				'e': '150.45 grams'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>What is the molar mass of glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>?</p>",
			answers: {
				'a': '12.01 g',
				'b': '18 g',
				'c': '160.00 g',
				'd': '180.18 g',
				'e': '220.17 g'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>Express 0.00723 m in scientific notation.</p>",
			answers: {
				'a': '723 x 10<sup>-5</sup> m',
				'b': '72.3 x 10<sup>-4</sup> m',
				'c': '7.23 x 10<sup>-3</sup> m',
				'd': '7.23 x 10<sup>3</sup> m',
				'e': '723 x 10<sup>5</sup> m'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>The calculator displays 3760.289. If the answer should have three significant figures, how should it be shown?</p>",
			answers: {
				'a': '376',
				'b': '3760.',
				'c': '3.76 x 10<sup>3</sup>',
				'd': '3.76 x 10<sup>2</sup>',
				'e': '376 x 10<sup>1</sup>'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>Using significant‐figure rules, calculate (8.790 – 13)/3.90.</p>",
			answers: {
				'a': '-1.03',
				'b': '-1',
				'c': '-1.08',
				'd': '-1.1',
				'e': '-1.079'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>One meter contains how many micrometers?</p>",
			answers: {
				'a': '1 x 10<sup>6</sup>',
				'b': '1 x 10<sup>-6</sup>',
				'c': '1 x 10<sup>3</sup>',
				'd': '1 x 10<sup>9</sup>',
				'e': '1 x 10<sup>-9</sup>'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>The melting point of palladium is 1552 °C. What is this in °F? (T<sub>F</sub>=T<sub>C</sub>×(9/5)+32)</p>",
			answers: {
				'a': '524576 °F',
				'b': '1825 °F',
				'c': '3000 °F',
				'd': '2825.6 °F',
				'e': '2825 °F'
			},
			correctAnswer: 'b',
			Unit: 1
		}, 
		{
			question: "<p>If palladium melts at 1552 °C, in what state is it at 2000 °C?</p>",
			answers: {
				'a': 'solid',
				'b': 'liquid',
				'c': 'gas',
				'd': 'a mixture of solid and liquid',
				'e': 'not enough information'
			},
			correctAnswer: 'b',
			Unit: 1
		},
		{
			question: "<p>All measurements in science involve a degree of:</p>",
			answers: {
				'a': 'precision',
				'b': 'accuracy',
				'c': 'uncertainty',
				'd': 'disorder',
				'e': 'conversion'
			},
			correctAnswer: 'c',
			Unit: 1
		}, 
		{
			question: "<p>A metal of mass 23.795 g displaces water from 55.25 mL to 61.00 mL. What is its density?</p>",
			answers: {
				'a': '4.138 g/mL',
				'b': '4.13 g/cm<sup>3</sup>',
				'c': '4.14 g/cm<sup>3</sup>',
				'd': '4.1 g/cm<sup>3</sup>',
				'e': '4 g/mL'
			},
			correctAnswer: 'a',
			Unit: 1
		}, 
		{
			question: "<p>Convert 0.0023 mm to meters.</p>",
			answers: {
				'a': '2.3 m',
				'b': '2.3 x 10<sup>3</sup> m',
				'c': '2.3 x 10<sup>6</sup> m',
				'd': '0.000023 m',
				'e': '2.3 x 10<sup>-6</sup> m'
			},
			correctAnswer: 'e',
			Unit: 1
		},
		{
			question: "<p>You measure one mass on a gram‐marked scale and another on a 0.001 g‐precision digital scale. When you add them, to what decimal place can you record the sum?</p>",
			answers: {
				'a': '0.01 g',
				'b': '0.1 g',
				'c': '1 g',
				'd': '10 g',
				'e': 'none of these'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>The mass difference 0.616 kg equals how many pounds? (1 kg = 2.205 lb)</p>",
			answers: {
				'a': '1.36 lb',
				'b': '1.36 lb',
				'c': '0.279 lb',
				'd': '0.2794 lb',
				'e': '1.4 lb'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>Which equality is incorrect?</p><ul><li>1.35 µm = 1.35×10<sup>3</sup> mm</li><li>0.079 mL = 0.079 cm<sup>3</sup></li><li>7.43×10<sup>-2</sup> nL = 7.43×10<sup>-8</sup> mL</li><li>3.5 kg = 3.5×10<sup>6</sup> mg</li><li>1.89×10<sup>4</sup> dL = 1.89×10<sup>3</sup> L</li></ul>",
			answers: {
				'a': '1.35 µm = 1.35×10<sup>3</sup> mm',
				'b': '0.079 mL = 0.079 cm<sup>3</sup>',
				'c': '7.43×10<sup>-2</sup> nL = 7.43×10<sup>-8</sup> mL',
				'd': '3.5 kg = 3.5×10<sup>6</sup> mg',
				'e': '1.89×10<sup>4</sup> dL = 1.89×10<sup>3</sup> L'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>You plot mass vs. volume for different aluminum pieces; the graph is a:</p>",
			answers: {
				'a': 'parabola',
				'b': 'hyperbola',
				'c': 'single point',
				'd': 'straight line',
				'e': 'circle'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>Substances with constant composition that cannot be broken down chemically are:</p>",
			answers: {
				'a': 'elements',
				'b': 'compounds',
				'c': 'mixtures',
				'd': 'solutions',
				'e': 'salts'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>Which of the following is <u>not</u> a fundamental SI unit?</p>",
			answers: {
				'a': 'gram',
				'b': 'candela',
				'c': 'mole',
				'd': 'kelvin',
				'e': 'meter'
			},
			correctAnswer: 'a',
			Unit: 1
		},
		{
			question: "<p>The freezing of water is:</p>",
			answers: {
				'a': 'a chemical change because it involves energy change',
				'b': 'a physical change because there is no color change',
				'c': 'a chemical change because ice is less dense',
				'd': 'a physical change because both phases are H<sub>2</sub>O',
				'e': 'a chemical change because it does not occur spontaneously'
			},
			correctAnswer: 'd',
			Unit: 1
		},
		{
			question: "<p>By knowing the number of electrons in a neutral atom, you can determine:</p>",
			answers: {
				'a': 'the number of neutrons',
				'b': 'the number of protons',
				'c': 'the atomic number',
				'd': 'the mass',
				'e': 'two of these'
			},
			correctAnswer: 'e',
			Unit: 1
		},
		{
			question: "<p>The apparatus shown (Rutherford foil) helped determine:</p>",
			answers: {
				'a': 'the existence of electrons',
				'b': 'that atoms are mostly empty space',
				'c': 'that energy travels at the speed of light',
				'd': 'that electrons have mass',
				'e': 'that mass and energy are related by E=mc<sup>2</sup>'
			},
			correctAnswer: 'b',
			Unit: 1
		},
		{
			question: "<p>Which of the following arrangements represent ions?</p><ul><li>1) 12 p, 12 n, 11 e</li><li>2) 12 p, 11 n, 12 e</li><li>3) 11 p, 12 n, 12 e</li><li>4) 11 p, 12 n, 11 e</li><li>5) 12 p, 12 n, 12 e</li></ul>",
			answers: {
				'a': '1 and 2',
				'b': '1, 3, and 4',
				'c': '1 and 3',
				'd': '2 and 3',
				'e': 'all are ions'
			},
			correctAnswer: 'c',
			Unit: 1
		},
		{
			question: "<p>Which of the following statements is incorrect?</p><ul><li>1. metals generally form cations</li><li>2. nonmetals are poor conductors</li><li>3. metals are malleable</li><li>4. nonmetals are brittle</li><li>5. metalloids are metals with some nonmetallic characteristics</li></ul>",
			answers: {
				'a': '1',
				'b': '2',
				'c': '3',
				'd': '4',
				'e': '5'
			},
			correctAnswer: 'e',
			Unit: 1
		} 
	],

	//Units 2 Questions (from https://www.sciencegeek.net/APchemistry/APtaters/Unit2Review.htm)
	[
		{
			question: "<p>A bomb calorimeter has a heat capacity of 3.18 kJ/K. When 0.0038 mol of a gas is burned in the calorimeter, the temperature increased from 25.0°C to 27.3°C. Calculate the energy released by the combustion of one mole of the gas.</p>",
			answers: {
				'a': '-1.9 x 10<sup>3</sup> kJ',
				'b': '-3.6 x 10<sup>2</sup> kJ',
				'c': '-2.8 x 10<sup>-2</sup> kJ',
				'd': '2.8 x 10<sup>-2</sup> kJ',
				'e': '7.3 kJ'
			},
			correctAnswer: 'a',
			Unit: 2
		},

		{
			question: "<p>A 25.0-g sample of sodium hydroxide is dissolved in 400 mL of water. What is the concentration of the solution?</p>",
			answers: {
				'a': '1.56 x 10<sup>-3</sup> M',
				'b': '0.10 M',
				'c': '1.56 M',
				'd': '62.5 M',
				'e': '100 M'
			},
			correctAnswer: 'c',
			Unit: 2
		},

		{
			question: "<p>The specific heat of iron is 0.450 J/(g·°C). How much heat is required to raise the temperature of a 5.00 gram sample of iron from 22°C to 53°C?</p>",
			answers: {
				'a': '-43 J',
				'b': '18 J',
				'c': '69.8 J',
				'd': '155 J',
				'e': '344 J'
			},
			correctAnswer: 'c',
			Unit: 2
		},

		{
			question: "<p>How many moles of gas would it take to fill an average man's lungs, total capacity of which is about 4.5 liters? Assume 1.00 atm pressure and 37.0°C.</p>",
			answers: {
				'a': '0.18 mol',
				'b': '0.75 mol',
				'c': '1.24 mol',
				'd': '11.2 mol',
				'e': '37.0 mol'
			},
			correctAnswer: 'a',
			Unit: 2
		},

		{
			question: "<p>You are given a 1.00-g sample of a dry gas that occupies 1.00 liter at a pressure of 545 Torr and a temperature of 25°C. The sample is bubbled through water at 35°C and collected over water so that the total pressure is 640 Torr and the temperature is 35°C. What will be the observed volume of the wet gas?</p>",
			answers: {
				'a': '.099 L',
				'b': '0.88 L',
				'c': '0.94 L',
				'd': '1.19 L',
				'e': '2.20 L'
			},
			correctAnswer: 'c',
			Unit: 2
		},

		{
			question: "<p>An 8.25 L sample of oxygen is collected at 25°C and 1.022 atm pressure. What volume will the gas occupy .940 atm and -15°C?</p>",
			answers: {
				'a': '1.78 L',
				'b': '5.00 L',
				'c': '7.77 L',
				'd': '8.76 L',
				'e': '10.4 L'
			},
			correctAnswer: 'c',
			Unit: 2
		},

		{
			question: "<p>What volume of 0.250 M H<sub>2</sub>SO<sub>4</sub> is needed to react completely with 14.5 grams of NaOH?</p>",
			answers: {
				'a': '0.237 mL',
				'b': '0.726 L',
				'c': '1.45 L',
				'd': '2.90 L',
				'e': '11.0 L'
			},
			correctAnswer: 'b',
			Unit: 2
		},

		{
			question: "<p>At a temperature of 250K, the molecules of an unknown gas, Z, have an average velocity equal to that of HI at 500K. What is the identity of the gas?</p>",
			answers: {
				'a': 'O<sub>2</sub>',
				'b': 'CO<sub>2</sub>',
				'c': 'N<sub>2</sub>',
				'd': 'SO<sub>2</sub>',
				'e': 'NO<sub>2</sub>'
			},
			correctAnswer: 'd',
			Unit: 2
		},

		{
			question: "<p>A 268 cm<sup>3</sup> sample of an ideal gas at 18°C and 748 Torr pressure is placed in an evacuated container of volume 648cm<sup>3</sup>. To what centigrade temperature must the assembly be heated so that the gas will fill the whole chamber at 748 Torr?</p>",
			answers: {
				'a': '120°C',
				'b': '324°C',
				'c': '431°C',
				'd': '597°C',
				'e': '704°C'
			},
			correctAnswer: 'c',
			Unit: 2
		},
		{
			question: "<p>How many grams of potassium nitrate are required to prepare 3.00 x 102 mL of 0.750 M solution?</p>",
			answers: {
				'a': '0.00223 g',
				'b': '2.4 g',
				'c': '22.8 g',
				'd': '84.5 g',
				'e': '2.28 x 10<sup>4</sup> g'
			},
			correctAnswer: 'c',
			Unit: 2
		},

		{
			question: "<p>A sample of wood has a heat of combustion of 3.29 kJ/g. What quantity of the wood must be burned to heat 250. g of water from 18°C to 85°C? Once again, the specific heat capacity of water is 4.18 J/°C·g.</p>",
			answers: {
				'a': '0.45 g',
				'b': '12.4 g',
				'c': '21.3 g',
				'd': '85.1 g',
				'e': '2.13 x 10<sup>4</sup> g'
			},
			correctAnswer: 'c',
			Unit: 2
		},
		{
			question: "<p>In the reaction 4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub> the substance oxidized is:</p>",
			answers: {
				'a': 'Al<sub>3+</sub>',
				'b': 'O<sub>2</sub>',
				'c': 'O<sub>2-</sub>',
				'd': 'Al',
				'e': 'None of these, because this is not a redox reaction'
			},
			correctAnswer: 'd',
			Unit: 2
		},
		{
			question: "<p>Calculate the work associated with the compression of a gas from 86 liters to 48 liters at a constant pressure of 2.0 atm.</p>",
			answers: {
				'a': '13.5 L·atm',
				'b': '76 L·atm',
				'c': '-76 L·atm',
				'd': '268 L·atm',
				'e': '0.050 L·atm'
			},
			correctAnswer: 'b',
			Unit: 2
		},
		{
			question: "<p>As a result of an exothermic reaction,</p>",
			answers: {
				'a': 'the energy of the system and the energy of the surroundings are decreased.',
				'b': 'the energy of the sytem and the energy of the surroundings are increased.',
				'c': 'the energy of the system is decreased and the energy of the surroundings are increased.',
				'd': 'the energy of the system is increased and the energy of the surroundings are decreased.',
				'e': 'None of these are accurate'
			},
			correctAnswer: 'c',
			Unit: 2
		},
		{
			question: "<p>A gas absorbs 2.5 J of heat and then performs 13.1 J of work. The change in internal energy of the gas is:</p>",
			answers: {
				'a': '5.2 J',
				'b': '-15.6 J',
				'c': '15.6 J',
				'd': '-10.6 J',
				'e': '10.6 J'
			},
			correctAnswer: 'd',
			Unit: 2
		},
		{
			question: "<p>In the reaction 4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub>, which substance is oxidized?</p>",
			answers: {
				'a': 'Al',
				'b': 'O<sub>2</sub>',
				'c': 'Al<sup>3+</sup>',
				'd': 'O<sup>2-</sup>',
				'e': 'none of these'
			},
			correctAnswer: 'a',
			Unit: 2
		}, 
		{
			question: "<p>In NaCl + H<sub>2</sub>SO<sub>4</sub> + MnO<sub>2</sub> → Na<sub>2</sub>SO<sub>4</sub> + MnSO<sub>4</sub> + H<sub>2</sub>O + Cl<sub>2</sub>, which ion is oxidized?</p>",
			answers: {
				'a': 'Na<sup>+</sup>',
				'b': 'Cl<sup>-</sup>',
				'c': 'O<sup>2-</sup>',
				'd': 'H<sup>+</sup>',
				'e': 'Mn<sup>4+</sup>'
			},
			correctAnswer: 'b',
			Unit: 2
		}, 
		{
			question: "<p>For NaCl + H<sub>2</sub>SO<sub>4</sub> + MnO<sub>2</sub> → Na<sub>2</sub>SO<sub>4</sub> + MnSO<sub>4</sub> + H<sub>2</sub>O + Cl<sub>2</sub>, the oxidation numbers on sulfur are:</p>",
			answers: {
				'a': '+6, +6 and +4 respectively',
				'b': '+4, +6 and +4 respectively',
				'c': '+4, +4 and +4 respectively',
				'd': '+6, +6 and +6 respectively',
				'e': '+4, +6 and +6 respectively'
			},
			correctAnswer: 'd',
			Unit: 2
		}, 
		{
			question: "<p>When the above reaction is balanced, the sum of all coefficients is:</p>",
			answers: {
				'a': '6',
				'b': '10',
				'c': '11',
				'd': '14',
				'e': '16'
			},
			correctAnswer: 'b',
			Unit: 2
		}, 
		{
			question: "<p>You have two samples of the same gas in identical containers at equal pressure. One is at -23 °C, the other at 227 °C. What is the ratio (n<sub>1</sub>:n<sub>2</sub>) of moles?</p>",
			answers: {
				'a': '1:4',
				'b': '4:1',
				'c': '1:1',
				'd': '2:1',
				'e': '1:2'
			},
			correctAnswer: 'e',
			Unit: 2
		},
		{
			question: "<p>150 psi converts to how many mm Hg?</p>",
			answers: {
				'a': '775 mm Hg',
				'b': '7.76×10<sup>3</sup> mm Hg',
				'c': '10.2 mm Hg',
				'd': '1470 mm Hg',
				'e': '760 mm Hg'
			},
			correctAnswer: 'b',
			Unit: 2
		}, 
		{
			question: "<p>Which flask contains the greatest number of molecules?</p>",
			answers: {
				'a': 'Flask 1 (NH<sub>3</sub>)',
				'b': 'Flask 2 (CH<sub>4</sub>)',
				'c': 'Flask 3 (O<sub>2</sub>)',
				'd': 'Flasks 2 and 3',
				'e': 'All are the same'
			},
			correctAnswer: 'e',
			Unit: 2
		}, 
		{
			question: "<p>In which flask do molecules have the highest average velocity?></p>",
			answers: {
				'a': 'Flask 1 (NH<sub>3</sub>)',
				'b': 'Flask 2 (CH<sub>4</sub>)',
				'c': 'Flask 3 (O<sub>2</sub>)',
				'd': 'Flasks 2 and 3',
				'e': 'All are the same'
			},
			correctAnswer: 'b',
			Unit: 2
		},
		{
			question: "<p>Flask(s) ______ is/are most likely to exhibit ideal behavior because ______.</p>",
			answers: {
				'a': 'Flask 3 (O<sub>2</sub>) because it has the greatest molar mass',
				'b': 'Flask 1 (NH<sub>3</sub>) because it has the lowest molar mass',
				'c': 'Flask 1 (NH<sub>3</sub>) because ammonia is polar',
				'd': 'Flask 2 (CH<sub>4</sub>) because it is a hydrocarbon',
				'e': 'Flasks 2 & 3 because CH<sub>4</sub> and O<sub>2</sub> are nonpolar'
			},
			correctAnswer: 'e',
			Unit: 2
		},
		{
			question: "<p>A motorist fills tires to 32 lb/in<sup>2</sup> at 30 °C. What is the pressure at 78 °C (constant volume)?</p>",
			answers: {
				'a': '83 lb/in<sup>2</sup>',
				'b': '28 lb/in<sup>2</sup>',
				'c': '12 lb/in<sup>2</sup>',
				'd': '37 lb/in<sup>2</sup>',
				'e': '4.8 lb/in<sup>2</sup>'
			},
			correctAnswer: 'd',
			Unit: 2
		}
	]
]


function unitSet(unit){
	localStorage.setItem("currentUnit", (unit - 1));
	currUnit = localStorage.getItem("currentUnit");
	console.log(currUnit)
	alert("Unit set to " + (unit) + ".");
	getPage(0);
}

function getPage(pageType){
	if (quizCheck == true){
		alert("You cannot change pages when taking a quiz!");
		return 0;
	}
	let nextPage = "";
	currUnit = localStorage.getItem("currentUnit")
	nextPage = pageList[currUnit][pageType]
	window.location.href = nextPage;
	location.replace(nextPage);
}

function startQuiz(listQuestions){
		quizCheck = true;
		document.getElementById("unitLabel").style.display = "inline";
		let unitLabelDisplay = parseInt(localStorage.getItem("currentUnit")) + 1
		console.log(unitLabelDisplay)
        currUnit = localStorage.getItem("currentUnit");
        for (let i = 0; i < listQuestions.length; ++i){
			if (currUnit == i){
				for (let j = 0; j < listQuestions[i].length; ++j){
					newQuestions[j] = listQuestions[i][j];
				}
			}
        }
        return generateQuestion(newQuestions);
}

function checkQuizEnd(){
        alert("You have finished the test. Your answers will be displayed shortly");
        document.getElementById("startQuiz").style.display = "none";
        document.getElementById("quiz").style.display = "none";
		document.getElementById("unitLabel").style.display = "none";
		document.getElementById("progressDiv").style.display = "none";
        displCorrect(amtCorrect);
}

function generateQuestion(listQuestions){
	quizCount++;
	if (quizCount > 10){
                checkQuizEnd();
				return 0;
        }
	document.getElementById("submit").innerHTML = "submit";
	document.getElementById("submit").setAttribute("onclick", "checkAnswers()")/*setAttribute taken from W3 schools at 
																			https://www.w3schools.com/jsref/met_element_setattribute.asp*/
	let currQuestion = Math.floor(Math.random() * listQuestions.length);
	document.getElementById("startQuiz").style.display = "none";
	quizPage.innerHTML = listQuestions[currQuestion].question + "<hr>";
	question = listQuestions[currQuestion];
	displQuestion(currQuestion);
}

function displQuestion(index){
	currentData = parseInt(document.getElementById("progress").style.width)
	currentData += 10
	document.getElementById("progress").style.width = currentData + "%"
	document.getElementById("percent").innerHTML = currentData + "%"
	for (let i = 97; i < 102; ++i){
		let currAnswer = '' + String.fromCharCode(i);
		let ansQuestion = newQuestions[index].answers[currAnswer];
		let questionHTML = "<input type = 'radio' id = " + 
		i + " value = " + currAnswer + " name = question>"; 	/*Radio button syntax taken from W3 Schools at 
									https://www.w3schools.com/tags/att_input_type_radio.asp*/
		let displLabel = "<label for = " + currAnswer + " id = 'label'>" + currAnswer.toUpperCase() + ": " + ansQuestion + "</label><br><br>";
		quizPage.innerHTML += questionHTML;
		quizPage.innerHTML += displLabel;
	}
	document.getElementById("submit").style.display = "block";
	newQuestions.splice(index, 1); //Splice syntax taken from W3Schools
}

function checkAnswers(){
        currUnit = localStorage.getItem("currentUnit");
        for (let i = 97; i < 102; ++i){
                let radio = document.getElementById(i);
                if (radio.checked){
                        if (radio.value == question.correctAnswer){
                                alert("Correct!");
								amtCorrect++;
								ans = removeDuplicates(JSON.parse(localStorage.getItem("incorrectAns"))) 	/*Stringify/Parse method taken from GeeksforGeeks at 
																											https://www.geeksforgeeks.org/how-to-store-an-array-in-localstorage/ */
								localStorage.setItem("incorrectAns", JSON.stringify(ans))
                        }
                        else{
							wrongMethod(radio)
                        }
                }
        }
	document.getElementById("submit").innerHTML = "Next";
     document.getElementById("submit").setAttribute("onclick", "generateQuestion(newQuestions)");
}

function wrongMethod(btn){
	alert("Wrong! the correct answer was " + question.correctAnswer);
	question.userAnswer = btn.value;
	ans = JSON.parse(localStorage.getItem("incorrectAns"));
	if (ans === null){
		ans = []
	}
	counter = parseInt(localStorage.getItem("wrongCounter"))
	if (isNaN(counter)){
		counter = 0;
	}
	ans[counter] = question
	console.log(ans)
	counter++;
	localStorage.setItem("wrongCounter", counter)
	localStorage.setItem("incorrectAns", JSON.stringify(ans));
}

function displCorrect(correct){
	let result = "You got " + correct + "/10 correct! To find out more about the questions you got wrong, check the Subject Recommendation tab!";
	let res = document.getElementById("center");
	res.innerHTML += "<p style = 'font-weight: bold; color: green'>" + result + "</p>";
	document.getElementById("submit").innerHTML = "<a href = 'quiz.html' style = 'color: black, font-weight: bold'>Try again?</a>";
	document.getElementById("submit").setAttribute("onclick", "getPage(2)");
	document.getElementById("submit").style.background = "black";
	quizCheck = false;
}

function sortIncorrect()
{
	let counter1 = 0;
	let counter2 = 0;
	let listAns = removeDuplicates(JSON.parse(localStorage.getItem("incorrectAns")));
	if (listAns.length == 0){
		alert("You have not taken a quiz yet!");
		return 0;
	}
	console.log(listAns)
	document.getElementById("functionDispl").style.display = "none";
	unit1List = [];
	unit2List = [];
	for (let i = 0; i < listAns.length; ++i){
		if (listAns[i].Unit == 1){
			unit1List[counter1] = listAns[i];
			counter1++;
		}
		else{	
			unit2List[counter2] = listAns[i];
			counter2++;
		}
	}
	displIncorrect([unit1List, unit2List])
}

function removeDuplicates(list){
	console.log(list)
	for (let i = 0; i < list.length - 1; ++i){
		for (let j = i + 1; j < list.length; ++j){
			if (JSON.stringify(list[i]) == JSON.stringify(list[j])){
				console.log(list[i], list[j])
				list.splice(j, 1)
			}
		}
	}
	return list;
}

function displIncorrect(listAns){
	let recommend = document.getElementById("displAnswers");
	for (let i = 0; i < listAns.length; ++i){
		let header = "<h1 style = 'color: blue; font-size: 50px'>Unit " + (i + 1) + "</h1>"
		recommend.innerHTML += header;
		for (let j = 0; j < listAns[i].length; ++j){
			let total = listAns[i][j];
			let totalAns = "";
			for (let k = 97; k < 102; k++){
				letter = '' + String.fromCharCode(k); //fromCharCode syntax taken from W3Schools at https://www.w3schools.com/jsref/jsref_fromcharcode.asp
				let oneAns = "<p style = 'color: blue; border: 0px;'>" + letter + ": " + total.answers[letter] + "</p><br>"
				totalAns += oneAns;
			}
			let question = total.question;
			let corranswer = "<p style = 'color: green'>Correct Answer: " + total.answers[total.correctAnswer]+ "</p>";
			let user = "<p style = 'color: red'>Your Answer: " + total.answers[total.userAnswer] + "</p>";
			let final = "<div style = 'display: flex; flex-direction: column; align-items: center'>" + question + totalAns + user + corranswer + "</div>";
			recommend.innerHTML += final + "<hr>";
		}
	}
}

function displPages(){
	let currUnit = parseInt(localStorage.getItem("currentUnit"));
	document.getElementById("displBtn").style.display = "none";
	if (currUnit == 0){
		displUnit1()
	}
	if (currUnit == 1){
		displUnit2()
	}
}

function displUnit1(){
	for (let i = 1; i < 127; ++i){
		let source = "1745512984185-3dacb012-ccd9-448c-8346-f4b5e7961b97_";
		if (i == 31){
			i = 43;
		}
		if (i == 72){
			i = 84;
		}
		source += i + ".jpg";
		let img = "<img src = " + source + ">";
		document.getElementById("pagesDisplay").innerHTML += img;
	}
}

function displUnit2(){
	for (let i = 142; i < 293; ++i){
		let source = "1745512984185-3dacb012-ccd9-448c-8346-f4b5e7961b97_";
		if (i == 186){
			i = 257;
		}
		source += i + ".jpg";
		let img = "<img src = " + source + ">";
		document.getElementById("pagesDisplay").innerHTML += img;
	}
}