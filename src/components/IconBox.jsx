import React from 'react';
import { Icons, Icon } from '../styles/individualFeedStyle';
import { useKakaoShare } from '../hooks/useKakaoShare';
import link from '../assets/images/Link.png';
import facebook from '../assets/images/Facebook.png';
import kakao from '../assets/images/Kakaotalk.png';

const IconBox = ({ setToast }) => {
  const { shareKakao } = useKakaoShare();
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}`;

  // clipboard에 현재 url 복사
  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setToast(true);
  };

  return (
    <Icons>
      <Icon colorType="link" onClick={copyUrl}>
        <img src={link} alt="링크" />
      </Icon>
      <Icon onClick={() => shareKakao(window.location.href)} colorType="kakao">
        <img src={kakao} alt="카카오" />
      </Icon>
      <Icon href={facebookShareUrl} colorType="facebook">
        <img src={facebook} alt="페이스북" />
      </Icon>
    </Icons>
  );
};

export default IconBox;
