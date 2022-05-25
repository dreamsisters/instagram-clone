import styled from '@emotion/styled';

export const Card = styled.li`
  width: 472px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  overflow: hidden;
  > .user-profile {
    background-color: #fff;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .left {
      display: flex;
      align-items: center;
      > .user-avartar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: #f2f2f2;
      }

      > .user-nickname {
        font-size: 15px;
        font-weight: 500;
        margin-left: 10px;
      }
    }

    > .more-settings-button {
    }
  }
`;

export const UserSection = styled.section``;

export const ImageSection = styled.section`
  display: flex;
`;

export const ContentSection = styled.section`
  > .buttons {
    display: flex;
    padding: 0 12px;

    > .col {
      display: flex;
      align-items: center;
      flex: 1;
    }

    > .carousal {
      justify-content: center;
    }

    > .last-col {
      justify-content: flex-end;
    }
  }

  > .likes {
    padding: 0 12px;

    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    > .counts {
      font-weight: 600;
    }
  }

  > .user-nickname {
    padding: 0 12px;

    margin-top: 14px;
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: baseline;
  }

  & .see-more {
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
    color: #878787;
    cursor: pointer;
  }

  & .comments {
    padding: 0 12px;
    display: inline-block;
    margin-top: 14px;
    font-size: 15px;
    font-weight: 400;
    color: #878787;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f2f2f2;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreContent = styled.div`
  font-size: 15px;
  margin-top: 2px;
  padding: 0 12px;
`;

export const CommentForm = styled.form`
  margin-top: 14px;
  background-color: gray;
  height: 50px;
  border-top: 1px solid #dfdfdf;
  position: relative;
  > input {
    width: 100%;
    height: 100%;
    padding: 12px;
    border: none;
    font-size: 15px;
    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #0295f6;
  border: none;
  background-color: transparent;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;
