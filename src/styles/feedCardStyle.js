import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 684px;
  padding: 32px;
  background-color: var(--gray10);
  box-shadow: 0px 4px 4px rgba(140, 140, 140, 0.25);
  border-radius: 16px;
  margin-top: 16px;

  @media (max-width: 767px) {
    width: 295px;
  }

  div.head {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    .more-icon {
      width: 26px;
      height: 26px;
      margin-left: auto;
      cursor: pointer;
    }
    div.dropdown {
      width: 102px;
      height: 80px;
      border-radius: 16px;
      position: absolute;
      top: 45px;
      right: 8px;
      display: flex;
      flex-direction: column;
      font: var(--caption1-regular);
      color: var(--gray40);
      border: 1px solid var(--gray40);
      justify-content: center;
      align-items: center;

      div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

  div.question {
    display: flex;
    flex-direction: column;
    margin-top: 36px;

    span.tip {
      font: var(--caption1-medium);
      color: var(--gray40);
    }
    span.content {
      width: 100%;
      margin-top: 4px;
      font: var(--body2-regular);
      color: var(--gray60);

      @media (max-width: 767px) {
        font: var(--body3-regular);
      }
    }
  }

  div.answer {
    display: flex;
    flex-direction: row;
    margin-top: 32px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;

      @media (max-width: 767px) {
        width: 32px;
        height: 32px;
      }
    }
    div.content {
      display: flex;
      flex-direction: column;
      margin-left: 12px;
      width: 100%;

      span.userName {
        color: var(--gray60);
        font: var(--body2-regular);

        @media (max-width: 767px) {
          font: var(--caption1-regular);
        }
      }
      p.content-answer {
        color: var(--gray60);
        font: var(--body3-regular);
        margin-top: 4px;
      }
      p.answer-rejected {
        color: var(--red50);
        font: var(--body3-regular);
        margin-top: 4px;
      }
    }
  }

  div.divider {
    border: 0.5px solid var(--gray30);
    margin-top: 32px;
  }

  div.like-dislike {
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    align-items: center;

    span {
      margin-left: 6px;
    }
    div.like {
      color: var(--gray40);
      font: var(--caption1-medium);

      div.like-icon {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }
    div.like-clicked {
      color: var(--blue50);
      font: var(--caption1-medium);

      div.like-icon {
        border-color: var(--blue50);
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }
    div.dislike {
      color: var(--gray40);
      font: var(--caption1-medium);
      margin-left: 32px;

      div.dislike-icon {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }
    div.dislike-clicked {
      color: var(--red50);
      font: var(--caption1-medium);
      margin-left: 32px;

      div.dislike-icon {
        border-color: var(--red50);
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
    }
  }
`;
