import { lib } from '@airport/direction-indicator';
import { IQueryValidator, QueryValidator } from './query/QueryValidator';
import { IQueryWebService, QueryWebService } from './query/QueryWs';

const hwFlow = lib('hw-flow')

export const QUERY_WEB_SERVICE = hwFlow.token<IQueryWebService>({
    class: QueryWebService,
    interface: 'IQueryWebService',
    token: 'IQueryWebService'
})
export const QUERY_VALIDATOR = hwFlow.token<IQueryValidator>({
    class: QueryValidator,
    interface: 'IQueryValidator',
    token: 'IQueryValidator'
})
QUERY_WEB_SERVICE.setDependencies({
    queryValidator: QUERY_VALIDATOR
})
