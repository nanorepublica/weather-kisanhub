import { Moment } from 'moment';

class dataPoint {
  year: number;
  month: number;
  value: number;
}

class Country {
  id: number;
  name: string;
}

class Metric {
  id: number;
  name: string;
}

class DisplayType {
  name: string;
}

class Config {
  country: Country;
  metric: Metric;
  startDate: Moment;
  endDate: Moment;
  display: DisplayType;
}

export {
  DisplayType,
  Config,
  Metric,
  Country,
  dataPoint,
};
