type ChangeQueryAction = {type: 'query/CHANGE', payload: string};

const change = (query: string): ChangeQueryAction => (
  { type: 'query/CHANGE', payload: query }
);

const initialQuery = '';

type Actions = ChangeQueryAction;

const queryReducer = (query = initialQuery, action: Actions) => {
  switch (action.type) {
    case 'query/CHANGE':
      return action.payload;
      
    default:
      return query;
  }
};

export default queryReducer;
export const actions = { change };