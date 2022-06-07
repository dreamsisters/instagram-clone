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
      > a {
        font-size: 0.9rem;
        padding: 5px 10px;
        margin-right: 10px;
        border: solid 1px #dfdfdf;
        border-radius: 5px;
      }
      > a:last-child {
        color: #fff;
        background-color: #ff9595;
      }
    }
  }
`;

export const NavIcon = styled.div`
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  > .mdIcon {
    width: 25px;
    height: 25px;
  }
  > a > .fiIcon {
    width: 20px;
    height: 20px;
  }
`;

export const UserIcon = styled.div`
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

export const MenuList = styled.ul`
  text-align: start;
  list-style: none;
  > a {
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    background-color: #fff;
    &:hover {
      cursor: pointer;
      border-radius: 3px;
      background-color: #f2f2f2;
    }
    > .mdICon {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
  > button {
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    background-color: #fff;
    border: none;
    &:hover {
      cursor: pointer;
      border-radius: 3px;
      background-color: #f2f2f2;
    }
    > .mdICon {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
  > .logout-button {
    border-top: 1px solid #f2f2f2;
  }
`;
