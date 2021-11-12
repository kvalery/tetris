import { RootStateOrAny, TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from '../store/reducers/rootReduser';

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector
