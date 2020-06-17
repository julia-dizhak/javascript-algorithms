import {
  validIPAddress,
  // validIPAddressUseRegex as validIPAddress
} from './468-validate-ip-address';

describe('validate IP Address test case', () => {
  it('string is null', () => {
    expect(validIPAddress(undefined)).toEqual('Neither');
  });

  it('string is empty', () => {
    expect(validIPAddress('')).toEqual('Neither');
  });

  it('IP is IPv4', () => {
    expect(validIPAddress('172.16.254.1')).toEqual('IPv4');
    expect(validIPAddress('192.0.0.1')).toEqual('IPv4');
    expect(validIPAddress('172.16.254.1')).toEqual('IPv4');

  });

  it('IP is IPv6', () => {
    expect(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')).toEqual('IPv6');
    expect(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toEqual('IPv6');
    expect(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334')).toEqual('IPv6');
    expect(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')).toEqual('IPv6');
  });

  it('IP is invalid', () => {
    expect(validIPAddress('...4.4')).toEqual('Neither');
    expect(validIPAddress('1.0.1.')).toEqual('Neither');
    expect(validIPAddress("01.01.01.01")).toEqual('Neither');
    expect(validIPAddress('256.256.256.256')).toEqual('Neither');
    expect(validIPAddress('1e1.4.5.6')).toEqual('Neither');
    expect(validIPAddress('2001:db8:85a3:0:0:8A2E:0370')).toEqual('Neither');
    expect(validIPAddress('2001:db8:85a3:0::8a2E:0370:7334')).toEqual('Neither');
  });
});
