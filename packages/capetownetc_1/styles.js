import { connect, Global, css } from "frontity";
import styles from "./styles.css";
import styles2 from "./styles2.css";

const GlobalStyles = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* <Global styles={css(styles)} />
      <Global styles={css(styles2)} /> */}
    </>
  );
};
export default connect(GlobalStyles);
