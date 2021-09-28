declare
    l_int NUMBER;
    l_var VARCHAR2(100);
begin
    l_int := 1;
    l_var := 'Tai Lam';
    dbms_output.put_line('l-int: ' || l_int);
    dbms_output.put_line('l_var: '  || l_var);
end;