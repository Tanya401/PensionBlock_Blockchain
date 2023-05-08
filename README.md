A blockchain based pension system that helps the user to manage their retirement savings through blockchain technology, for enhanced security, transparency and efficiency.
It leverages the decentralized and immutable nature of blockchain to address various challenges in traditional pension systems, such as trust, data integrity and administrative inefficiencies.
In this system, the user’s records, contributions, transactions, and other relevant data would be stored on blockchain, which will ensure a tamper-proof audit trail, enabling participants, pension providers, and regulators to have real-time access to accurate and verified information.


Key features and benefits of the system:
1)	Security: Blockchain’s cryptographic techniques would provide a secure environment for storing sensitive pension data, and protect against unauthorized tampering.
2)	Transparency: The decentralized nature of blockchain would allow for transparent visibility into pension transactions, and fund performance.
3)	Trust and Accountability: The immutability factor of blockchain would ensure the integrity of pension records and transactions, instilling trust among participants, pension providers, and administrators.



Design of the system:
The design of the system revolves around three crucial participants of a pension program. 
•	The first would be the employer or the organization, who is responsible for the deposits of the funds in the user’s account at the end of each month. 
•	The second is the user who is currently working at the organization and some parts of his monthly earnings are deposited in his pension account, so that after retirement he could enjoy the benefits of that.
•	The third one is the administrator (or the admin). Our smart contract here would act as the admin, as it would make sure that the user is eligible for the pension and no frauds are being made from any of the side to keep the transactions secure and transparent.
These three interactors of the system work together for a smooth flow of funds in form of cryptocurrencies from employer’s side to user’s side through the admin.




Tech stack involved:
Implementation of smart contracts: Solidity, Remix IDE, WEB3.JS
User interface: HTML, CSS, JS
Private Blockchain: Ganache
Crypto wallet: MetaMask


The flow of the funds as cryptocurrencies would be like:
1.	The employer deposits the funds into the admin’s account or the admin’s address (in terms of smart contract address) by linking their MetaMask account with the contract, using their private key. After this the whole control, shifts to the admin (or our smart contract) who now checks whether the user is eligible for withdrawing the pension or not.
2.	Now, on the user interface, the user links his MetaMask account using his private key and connects his account with the system. Then the user registers themselves, by providing their name, age and Aadhar card No. After linking their account and user registration the user can either see the balance they currently have or withdraw the amount they want, if they are eligible.
3.	When the user enters the amount, they want to withdraw, the control shifts to the admin. Admin comes into play for checking that whether the user eligible for withdrawing the pension. 
4.	The criteria to be eligible for the pension is based on the age of the user. User must be of at least 60 years of age, to get the pension in forms of cryptocurrencies. Otherwise, the pension would just keep on getting accumulated and stored, but the user will not be able to withdraw it. The age criteria is taken as at least to be of 60 because the age criteria set by government is currently 60. If the user is eligible, then the admin transfers the mentioned amount into the user’s linked MetaMask account.
5.	The next thing that would be implemented that on one address only one user can register. Here, address refers to the unique identifier that represents an account or entity on a blockchain network. A check would be implemented that no two users can register on the same address as otherwise it would lead to fraudulent activities.
The above mentioned five steps would be how the flow of the funds in form of cryptocurrencies would take place. And it should be noted that we would using different addresses from Ganache, from employer and user addresses. Ganache is used to set up a private Ethereum network that mimics the behaviour of a public blockchain. Therefore, for testing various scenarios and testcases ganache would helps us to see how ethers are being transferred and to check the flow of the system.



Here, is depiction of the UI:


























