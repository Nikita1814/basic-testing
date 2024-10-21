// Uncomment the code below and write your tests
//, TransferFailedError,
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(100);
    expect(account.getBalance()).toEqual(100)

  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(100);
    expect(() => {account.withdraw(101)}).toThrow(new InsufficientFundsError(100))
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(100);
    const secondAccount = getBankAccount(0)
    expect(() => {account.transfer(101, secondAccount)}).toThrow(new InsufficientFundsError(100))
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);
    expect(() => {account.transfer(100, account)}).toThrow(new TransferFailedError())
  });

  test('should deposit money',  async () => {
    const account = getBankAccount(100);
    account.deposit(20);

    expect(account.getBalance()).toEqual(120)
  });

  test('should withdraw money', () => {
    const account = getBankAccount(100);
    expect(account.withdraw(20).getBalance()).toEqual(80)
  });

  test('should transfer money', () => {
    const account = getBankAccount(100);
    const secondAccount = getBankAccount(0)
    expect((() => {
      account.transfer(20, secondAccount)
      return secondAccount.getBalance()
    })()).toEqual(20)
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100)
    let res = null
    do {
      res = await account.fetchBalance();
    } while (res === null) 
      
    expect(res).toBeInstanceOf(Number)
  });

  test('should set new balance if fetchBalance returned number', async () => {
   const account = getBankAccount(100);
    await account.fetchBalance().then((res) => {
      if (res) {
        expect(account.synchronizeBalance()).resolves.toBe(res);
      }
    })
   })

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(100);
    await account.fetchBalance().then((res) => {
      if (!res) {
        expect(account.synchronizeBalance()).resolves.toThrow('Synchronization failed');
      }
    })
  });
});
