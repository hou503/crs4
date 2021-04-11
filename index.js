const launch = require('./main/puppeteer');

const hawishub = require('./config/hawishub');

const resolveData = ({ datas, selector }) => datas.map(i => ({ url: i, selector }))

const go = async () => {
  const args = process.argv.splice(2);
  const [ hideX ] = args;
  const tabs = 6;
  const datas = [
    ...resolveData(hawishub),
  ];
  launch(datas, hideX, tabs);
}

go();
