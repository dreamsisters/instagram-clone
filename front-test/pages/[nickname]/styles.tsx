import styled from '@emotion/styled';

export const Base = styled.div``;

export const ProfileSummary = styled.div`
  height: 250px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  > .user-profile-avartar {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  > .user-profile-avartar div {
    width: 150px;
    height: 150px;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6b6b6b;
    transform: translate(-80px);
  }

  > .user-profile-desc {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;

    > .header {
      display: flex;
      align-items: center;
      font-size: 14px;

      > h3 {
        font-size: 22px;
        font-weight: 400;
      }

      > .edit-button {
        margin-left: 20px;
        padding: 5px 12px 4px;
        border: 1px solid #dfdfdf;
        border-radius: 4px;
        cursor: pointer;
      }

      > .settings-button {
        margin-left: 20px;
        width: 40px;
        height: 40px;
        border: 1px solid #dfdfdf;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    > ul.statics {
      display: flex;
      width: 300px;

      > li {
        flex: 1;

        > span {
        }

        > .counts {
          margin-left: 5px;
          font-weight: 600;
        }
      }

      > .show-follow-modal {
        cursor: pointer;
      }
    }

    > .user-profile-name {
      font-weight: 600;
    }
  }
`;

export const Subjects = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  transform: translateY(-1px);
`;

export const Subject = styled.div<{ active: boolean }>`
  padding: 16px;
  margin: 0 16px;
  cursor: pointer;
  font-size: 13px;
  border-top: ${(props) => (props.active ? '1px solid #191919' : 'none')};
`;

export const SettingsModalContent = styled.ul`
  width: 420px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  > li {
    padding: 15px;
    border-bottom: 1px solid #dfdfdf;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;

export const FollowListModalContent = styled.div`
  width: 420px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  //overflow-y: scroll;
  height: 500px;
  > h3 {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const Section = styled.section`
  max-width: 980px;
  margin: auto;

  > ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    //> li {
    //  height: 300px;
    //  background-color: #f2f2f2;
    //  cursor: pointer;
    //}
  }
`;
