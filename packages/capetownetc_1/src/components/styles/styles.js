import { connect, Global, css } from "frontity";
import styles from "./styles.css";

const GlobalStyles = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(styles)} />
    </>
  );
};
export default connect(GlobalStyles);
