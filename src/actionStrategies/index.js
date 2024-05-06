import enterNumberStrategy from './enterNumberStrategy';
import enterNumberEspecialStrategy from './enterNumberEspecialStrategy';
import enterPointStrategy from './enterPointStrategy';
import enterOperatorsStrategy from './enterOperatorsStrategy';
import enterEqualOrResetStrategy from './enterEqualOrResetStrategy';
import enterEspecialOperatorsStrategy from './enterEspecialOperatorsStrategy';
import enterTypeAngleStrategy from './enterTypeAngleStrategy';

const STRATEGIES = {
  numbers: enterNumberStrategy,
  especialNumbers: enterNumberEspecialStrategy,
  point: enterPointStrategy,
  operators: enterOperatorsStrategy,
  equalOrReset: enterEqualOrResetStrategy,
  especialOperators: enterEspecialOperatorsStrategy,
  typeAngle: enterTypeAngleStrategy,
};

export default STRATEGIES;
