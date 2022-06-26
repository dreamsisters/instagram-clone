import styled from '@emotion/styled';

export const Nav = styled.nav`
  width: 100vw;
  height: 60px;
  border: 1px solid #dfdfdf;
  > .inner {
    max-width: 1200px;
    min-width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: auto;
    position: relative;

    > .col {
      width: 33.3%;
      display: flex;
      align-items: center;
      > a > .navIcon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    > .col.logo {
      min-width: 100px;
      cursor: pointer;
      > a {
        display: inline-block;
        padding: 5px 20px 4px 0;
      }
    }
    > .col.search-box {
      /* justify-content: center; */
      min-width: 30px;

      > input {
        width: 350px;
        height: 35px;
        padding-left: 10px;
        margin-right: 5px;
        border: none;
        border-radius: 6px;
        background-color: #f2f2f2;
      }
    }

    > .col.menu {
      display: flex;
      justify-content: flex-end;
      > .iconBox {
        width: 165px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export const MenuItem = styled.li`
  border-radius: 50%;
  margin-right: 10px;
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  > .mdIcon {
    width: 25px;
    height: 25px;
  }
  > .fiIcon {
    width: 20px;
    height: 20px;
  }
`;

export const UserProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f2f2f2;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

export const UserProfileCard = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  > .user-avartar {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: #f2f2f2;
  }

  > .user-desc {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    > .user-nickname {
      font-size: 15px;
    }

    > .user-auth {
      font-size: 13px;
      color: #878787;
    }
  }
`;

export const MenuList = styled.ul`
  padding-top: 10px;
  text-align: start;
  font-size: 14px;
  > li {
    padding: 10px 20px;
    width: 100%;
    border: none;
    background-color: #fff;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  > .logout-button {
    border-top: 1px solid #f2f2f2;
  }
`;
