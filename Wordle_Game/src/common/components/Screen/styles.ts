import { ScrollView } from "react-native";

import styled from "styled-components/native";
import { compose, flexbox, layout, space } from "styled-system";

const generatePadding =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any, options: string[]): number | undefined => {
    const value =
      `${props[options[0]] || ""}` ||
      `${props[options[1]] || ""}`.replace("px", "");
    if (!value) {
      return 15;
    }
    return parseInt(value, 10);
  };

const generateMargin =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any, options: string[]): number | undefined => {
    const value =
      `${props[options[0]] || ""}` ||
      `${props[options[1]] || ""}`.replace("px", "");
    if (!value) {
      return undefined;
    }
    return parseInt(value, 10);
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollContentContainerStyle = (props): any => ({
  contentContainerStyle: {
    // FLEXBOX PROPS

    flexGrow: props.flexGrow || 1,
    flexWrap: props.flexWrap || "nowrap",
    flexDirection: props.flexDirection || "row",

    alignItems: props.alignItems || "flex-start",
    justifyContent: props.justifyContent || "flex-start",
    alignContent: props.alignContent || undefined,
    flexBasis: props.alignContent || undefined,
    alignSelf: props.alignSelf || undefined,
    flexShrink: props.flexShrink || undefined,
    order: props.order || undefined,

    // LAYOUT PROPS
    overflow: props.overflow || "visible",
    minHeight: props.minHeight || undefined,
    mihWidth: props.mihWidth || undefined,
    height: props.height || undefined,
    width: props.width || "100%",
    maxHeight: props.maxHeight || undefined,
    maxWidth: props.maxWidth || undefined,
    size: props.size || undefined,
    verticalAlign: props.verticalAlign || undefined,

    // PADING PROPS
    padding: generatePadding(props, ["padding", "p"]),
    paddingHorizontal: generatePadding(props, ["paddingHorizontal", "px"]),
    paddingVertical: generatePadding(props, ["paddingVertical", "py"]),
    paddingTop: generatePadding(props, ["paddingTop", "pt"]),
    paddingBottom: generatePadding(props, ["paddingBottom", "pb"]),
    paddingLeft: generatePadding(props, ["paddingLeft", "pl"]),
    paddingRight: generatePadding(props, ["paddingRight", "pr"]),

    // MARGIN PROPS
    margin: generateMargin(props, ["margin", "m"]),
    marginHorizontal: generateMargin(props, ["marginHorizontal", "mx"]),
    marginVertical: generateMargin(props, ["marginVertical", "my"]),
    marginTop: generateMargin(props, ["marginTop", "mt"]),
    marginBottom: generateMargin(props, ["marginBottom", "mb"]),
    marginLeft: generateMargin(props, ["marginLeft", "ml"]),
    marginRight: generateMargin(props, ["marginRight", "mr"]),
  },
});

export const ViewContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  ${compose(flexbox, layout, space)}
`;

export const Scroll = styled(ScrollView).attrs(scrollContentContainerStyle)`
  padding: 0;
  margin: 0;
`;
