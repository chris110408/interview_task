import { withStateHandlers } from "recompose";

const stateHandlers = withStateHandlers(
  {
    newTags: [],
    inputVisible: false,
    inputValue: ""
  },
  {
    // eslint-disable-next-line
    showInput: ({ inputVisible }) => () => ({
      inputVisible: true
    }),
    // eslint-disable-next-line
    handleInputChange: props => event => {
      return { inputValue: event.target.value };
    },
    handleInputConfirm: ({ inputValue, newTags }) => () => {
      if (
        inputValue &&
        newTags.filter(tag => tag.label === inputValue).length === 0
      ) {
        newTags = [
          ...newTags,
          { key: `new-${newTags.length}`, label: inputValue }
        ];
      }
      return {
        newTags,
        inputVisible: false,
        inputValue: ""
      };
    }
  }
);

export { stateHandlers };
