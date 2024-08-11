export let processData = [
    {
        title:"Create an account",
        count: "01"
    }, 
    {
        title:"Click on receive payment",
        count: "02"
    },
    {
        title:"Input amount to be received",
        count: "03"
    },
    {
        title:"Select preferred crypto",
        count: "04"
    },
    {
        title:"Generate payment QR code",
        count: "05"
    },
    {
        title:"Wait to get paid",
        count: "06"
    },
]

export const currOptions = [
  {
    value: 'NGN',
    label: 'NGN',
  },
];

const panelStyle = {
    marginBottom: 18,
    backgroundColor:"#f4fafd",
    border: '1px solid #BDBDBD',
    borderRadius:"10px",
    padding:"0.7em"
  };
export const getItems = (panelStyle) => [
    {
      key: '1',
      label: 'What is a Cryptocurrency ?',
      children: <p>A cryptocurrency is a digital currency that uses encryption to secure transactions and function as a virtual accounting system. Cryptocurrencies are peer-to-peer systems that allow anyone to send and receive payments without banks verifying transactions. 
        They run on a public ledger called blockchain, which is a record of all transactions held and updated by currency holders</p>,
      style: panelStyle,
    },
    {
      key: '2',
      label: 'Do I need a crypto wallet to use Ludopay ?',
      children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
         Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
      style: panelStyle,
    },
    {
      key: '3',
      label: 'Is Ludopay free to use?',
      children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
      Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
      style: panelStyle,
    },
    {
        key: '4',
        label: 'Is Ludopay free to use?',
        children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
        Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
        style: panelStyle,
      },
      {
        key: '5',
        label: 'Is Ludopay free to use?',
        children: <p>Crypto wallets come in two types: hot (online storage) and cold (offline storage), and a variety of price points. Crypto.com DeFi Wallet and Zengo
        Wallet are two of the highest-rated hot wallets. Ledger earns top marks among cold wallets</p>,
        style: panelStyle,
      },
  ];

  export const items = [
    { id: 1, content: 'I must commend the simplicity of the platform and payment process +. It was so easy to use. Thumbs up, guys! ',
     rating:5, name:" Chukwuma Obi"},
    { id: 2, content: 'Thanks to LudoPay, I have been able to expand payment options for my services. The process was smooth and direct. My customers are happy. I am happy. I recommend LudoPay 100%',
     name:"Femi Awoyeye", rating:4 },
    { id: 3, content: 'I love how I could tell our customers that we accept cryptocurrencies. It warms their heart and makes them see how much we have grown. Thank you, Ludopay.',
     name:"Sidi Herbert", rating:5 },
     { id: 4, content: 'Thanks to LudoPay, I have been able to expand payment options for my services. The process was smooth and direct. My customers are happy. I am happy. I recommend LudoPay 100%',
     name:"Femi Awoyeye" },
     { id: 5, content: '“I must commend the simplicity of the platform and payment process +. It was so easy to use. Thumbs up, guys! “',
     rating:3, name:" Chukwuma Obi"},
     { id: 6, content: 'I love how I could tell our customers that we accept cryptocurrencies. It warms their heart and makes them see how much we have grown. Thank you, Ludopay.',
     name:"Sidi Herbert", rating:5 },
  ];