import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 33px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 50px;
  height: 50px;
  border: 4px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 25px;
`;
