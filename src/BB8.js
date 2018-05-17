import styled, { css, keyframes } from "styled-components";

const white = alpha => `rgba(255, 255, 255, ${alpha})`;
const black = alpha => `rgba(0, 0, 0, ${alpha})`;

const spin = keyframes`
  0 {
    transform: rotate(0deg) translateZ(0);
  }
  100% {
    transform: rotate(-360deg) translateZ(0);
  }
`;

const BB8 = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  width: 120px;
  height: 78px;
  margin-left: -60px;
  margin-top: -145px;
  background-color: #fff;
  background-image: radial-gradient(
      circle at 85px 50px,
      #555 5px,
      transparent 6px
    ),
    radial-gradient(circle at 85px 50px, #fff 7px, transparent 8px),
    radial-gradient(circle at 85px 50px, #555 10px, transparent 11px),
    radial-gradient(circle at 58px 32px, ${white(0.9)} 2px, transparent 3px),
    radial-gradient(circle at 52px 36px, #333 12px, transparent 13px),
    radial-gradient(circle at 52px 36px, #555 16px, transparent 17px),
    radial-gradient(circle at 52px 37px, #fff 20px, transparent 20px),
    linear-gradient(to top, #aaa 7px, transparent 7px),
    linear-gradient(
      to bottom,
      #fff 7px,
      #ccc 7px,
      #aaa 15px,
      #fff 15px,
      #fff 18px,
      #ffa500 18px,
      #ffa500 24px,
      transparent 24px
    ),
    linear-gradient(
      to right,
      transparent 29px,
      #ccc 30px,
      #ccc 31px,
      transparent 31px,
      transparent 60px,
      #ccc 61px,
      #ccc 62px,
      transparent 62px
    ),
    linear-gradient(
      to right,
      transparent 5px,
      #fff 5px,
      #fff 10px,
      transparent 10px,
      transparent 30px,
      #fff 30px,
      #fff 40px,
      transparent 40px,
      transparent 50px,
      #fff 50px,
      #fff 100px,
      transparent 100px,
      transparent 115px,
      #fff 115px
    ),
    linear-gradient(to top, #ffa500 16px, transparent 16px);
  border-radius: 50%/60px;
  border-bottom-right-radius: 50px 10px;
  border-bottom-left-radius: 50px 10px;
  border-bottom: 8px solid #ccc;
  box-shadow: inset -5px -2px 20px ${black(0.4)};

  &:before,
  &:after {
    display: block;
    content: "";
    position: absolute;
  }

  &:before {
    width: 200px;
    height: 200px;
    margin-left: -100px;
    margin-top: 79px;
    left: 50%;
    background-color: #fff;
    background-image: radial-gradient(
        ellipse at top right,
        #ffa500 50px,
        transparent 50px
      ),
      radial-gradient(ellipse at bottom right, #ffa500 50px, transparent 50px),
      radial-gradient(ellipse at top left, #ffa500 50px, transparent 50px),
      radial-gradient(ellipse at bottom left, #ffa500 50px, transparent 50px),
      radial-gradient(circle at 100px 100px, transparent 60px, #fff 61px),
      radial-gradient(circle at 100px 100px, transparent 44px, #ffa500 45px),
      linear-gradient(
        to bottom,
        transparent 90px,
        #fff 90px,
        #fff 93px,
        transparent 93px,
        transparent 99px,
        #fff 99px,
        #fff 103px,
        transparent 103px,
        transparent 108px,
        #fff 108px,
        #fff 112px,
        transparent 112px
      ),
      radial-gradient(circle at 100px 100px, #aaa 24px, transparent 25px),
      radial-gradient(circle at 100px 100px, #fff 28px, transparent 29px),
      linear-gradient(
        -45deg,
        transparent 132px,
        #fff 132px,
        #fff 136px,
        #ffa500 136px,
        #ffa500 152px,
        #fff 152px,
        #fff 155px,
        transparent 155px
      ),
      linear-gradient(
        45deg,
        transparent 129px,
        #fff 129px,
        #fff 133px,
        #ffa500 133px,
        #ffa500 150px,
        #fff 150px,
        #fff 153px,
        transparent 153px
      ),
      linear-gradient(
        to bottom,
        transparent 75px,
        #fff 75px,
        #fff 119px,
        transparent 119px
      ),
      radial-gradient(circle at 100px 100px, #aaa 40px, transparent 41px),
      radial-gradient(circle at 100px 100px, #fff 44px, transparent 45px);
    border-radius: 50%;
    z-index: -2;

    animation: ${({ turn }) =>
      turn ? `${spin} 0.8s infinite linear` : "none"};
  }

  &:after {
    width: 200px;
    height: 200px;
    margin-left: -100px;
    margin-top: 79px;
    left: 50%;
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom,
      ${black(0.6)} 10px,
      transparent 15px
    );
    box-shadow: inset 0 -20px 30px ${black(0.5)};
    transform: translate3d(0, 0, 0);
    z-index: -1;
  }
`;

const BigBB8 = BB8.extend`
  zoom: 200%;

  @media (max-width: 700px) {
    zoom: 150%;
  }

  @media (max-width: 500px) {
    zoom: 100%;
  }
`;

export default BigBB8;
