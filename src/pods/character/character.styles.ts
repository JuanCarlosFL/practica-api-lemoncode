import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  padding: "12px",
  marginBottom: "10px",
  backgroundColor: "#fafafa",
} as const;

export const rootStyle = {
  margin: "0 auto",
  width: "50%",
  padding: "0 10px",
  color:"purple",
  fontFamily:"Verdana",
};

export const image = {
  borderRadius: "10px"
}
