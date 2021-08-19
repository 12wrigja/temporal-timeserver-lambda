const { Temporal } = require('@js-temporal/polyfill');

module.exports.handler = async (context, req) => {
  const currentTimeLocal = Temporal.Now.instant().toLocaleString();
  console.log(currentTimeLocal);
  context.res = {
    status: 200,
    body: currentTimeLocal
  };
};
