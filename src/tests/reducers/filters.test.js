import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up a default filter values', () => {
    const state = filtersReducer(undefined,{ type: '@@INIT' });
    expect(state).toEqual({
        text:'', 
        sortBy: 'date', 
        startDate: moment().startOf('month'), 
        endDate: moment().endOf('month')
    });
});

test('should set up a sortBy to amount', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set up a sortBy to date', () => {
    const currentState = {
        text:'', 
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set up text filter', () => {
    const state = filtersReducer(undefined,{ type: 'SET_TEXT_FILTER', text: 'hello' });
    expect(state.text).toBe('hello');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined,{ type: 'SET_START_DATE', startDate: 0 });
    expect(state.startDate).toBe(0);
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined,{ type: 'SET_END_DATE', endDate: 0 });
    expect(state.endDate).toBe(0);
});
