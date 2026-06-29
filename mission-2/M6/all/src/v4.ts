interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    year: number;
  }
  others: T;
}

const poorDeveloper: Developer<{
  smartWatch: {
    brand: string;
    year: number;
    feature: {
      bloodPressure: boolean;
      heartRate: boolean;
    }
  }
}> = {
  name: 'Mr. Poor',
  salary: 20,
  device: {
    brand: "hp",
    model: '250',
    year: 2020,
  },
  others: {
    smartWatch: {
      brand: "oraimo",
      year: 2025,
      feature: {
        bloodPressure: true,
        heartRate: true,
      }
    }
  }
}

const richDeveloper: Developer<{
  smartWatch: {
    brand: string;
    year: number;
    feature: {
      bloodPressure: boolean;
      heartRate: boolean;
    };
  }
  bike: {
    brand: string;
    model: string;
    year: number;
  };
}> = {
  name: 'Mr. Rich',
  salary: 200,
  device: {
    brand: "apple",
    model: 'm5',
    year: 2026,
  },
  others: {
    smartWatch: {
      brand: "apple",
      year: 2025,
      feature: {
        bloodPressure: true,
        heartRate: true,
      }
    },
    bike: {
      brand: "yamaha",
      model: "R15",
      year: 2026
    }
  }
}