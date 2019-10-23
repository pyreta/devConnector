const actionCache = {};

const cycles = ['STARTED', 'SUCCEEDED', 'FAILED'];
export const createCycleTypes = action =>
  cycles.reduce((acc, cycle) => [...acc, `${action}_${cycle}`], [action]);

const makeCreateActionsAndTypes = globalActions => (types = []) =>
  [...globalActions, ...types].reduce(
    (accum, type) => {
      if (actionCache[type]) {
        accum.actions[type] = actionCache[type];
      } else {
        const actionCreator = (payload, otherAttrs = {}) => ({
          type,
          payload,
          ...otherAttrs,
        });
        accum.actions[type] = actionCreator;
        actionCache[type] = actionCreator;
      }
      accum.actionTypes[type] = type;
      return accum;
    },
    { actions: {}, actionTypes: {} },
  );

const globalActions = [
  'CLOSE_MODAL',
  'OPEN_MODAL',
  'MESSAGE_MODAL',
  'PROMPT_LOGIN',
];

export default makeCreateActionsAndTypes(globalActions);
