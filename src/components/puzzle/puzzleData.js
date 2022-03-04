import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import seven from "../../assets/7.png";
import eight from "../../assets/8.png";
import nine from "../../assets/9.png";

export const puzzleData = [
  {
    img: <img src={one} alt={one} />,
  },
  {
    img: <img src={two} alt={two} />,
  },
  {
    img: <img src={three} alt={three} />,
  },
  {
    img: <img src={four} alt={four} />,
  },
  {
    img: <img src={five} alt={five} />,
  },
  {
    img: <img src={six} alt={six} />,
  },
  {
    img: <img src={seven} alt={seven} />,
  },
  {
    img: <img src={eight} alt={eight} />,
  },
  {
    img: <img src={nine} alt={nine} />,
  },
];

export const puzzleData2 = [
  {
    id: "four",
    img: four,
    oriIndex: 0,
    trueIndex: 3,
  },
  { id: "one", img: one, oriIndex: 1, trueIndex: 0 },
  { id: "six", img: six, oriIndex: 2, trueIndex: 5 },
  { id: "two", img: two, oriIndex: 3, trueIndex: 1 },
  { id: "nine", img: nine, oriIndex: 4, trueIndex: 8 },
  { id: "seven", img: seven, oriIndex: 5, trueIndex: 6 },
  { id: "three", img: three, oriIndex: 2 },
  { id: "five", img: five, oriIndex: 4 },
  { id: "eight", img: eight, oriIndex: 7 },
];
