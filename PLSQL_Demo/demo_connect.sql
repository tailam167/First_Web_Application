SELECT
    *
FROM
    employees;
    
select * from product
--SELECT * FROM emp_details_view;

-- Demo Scope and Visibility of Variables and Blocks Labels

<< parent >> DECLARE
    l_int    NUMBER;
    l_outer  NUMBER;
BEGIN
    l_int := 1;
    l_outer := 1;
    DECLARE
        l_inner  NUMBER;
        l_int    NUMBER;
    BEGIN
        l_int := 2;
        l_inner := 2;
        sys.dbms_output.put_line('l_int in inner block: ' || l_int);
        sys.dbms_output.put_line('l_int in parent block: ' || parent.l_int);
    END;

    sys.dbms_output.put_line('l_int in outer block: ' || l_int);
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

-- Demo Number with precision - scale attributes and negative number

DECLARE
    l_number           NUMBER(4, 2);
    l_number_constant  CONSTANT NUMBER := 5;
    l_number_default   NUMBER(5, 2) DEFAULT 5.2;
    l_number_float     NUMBER;
    l_number_negative  NUMBER(5, -2);
BEGIN
    l_number := 25.457;
    l_number_float := 3.245;
--    l_number_constant := 6;
    l_number_default := 6.6;
    l_number_negative := 12345.678;
    sys.dbms_output.put_line('l_number: ' || l_number);
    sys.dbms_output.put_line('l_number_constant: ' || l_number_constant);
    sys.dbms_output.put_line('l_number_default: ' || l_number_default);
    sys.dbms_output.put_line('l_number_float: ' || l_number_float);
    sys.dbms_output.put_line('l_number_negative: ' || l_number_negative);
    l_number_negative := 156.456;
    sys.dbms_output.put_line('l_number_negative(2): ' || l_number_negative);
    l_number_negative := 1234.56;
    sys.dbms_output.put_line('l_number_negative(3): ' || l_number_negative);
END;
/

-- Demo subtypes and %TYPE

DECLARE
    l_int          INTEGER := 1.8;
    SUBTYPE myvar IS NUMBER(38, 0);
    l_myvar        myvar := 1.8;
    l_num          NUMBER(5, 2) NOT NULL DEFAULT 2.21;
    l_num_type     l_num%TYPE := 1.123;
    l_num_coltype  employees.employee_id%TYPE := 206.567;
BEGIN
    sys.dbms_output.put_line('l_int: ' || l_int);
    sys.dbms_output.put_line('l_myVar: ' || l_myvar);
    sys.dbms_output.put_line('l_num_coltype: ' || l_num_coltype);
END;
/

-- Demo BINARY_DOUBLE and BINARY_FLOAT

DECLARE
    l_num1       NUMBER := 0.51;
    l_num2       NUMBER;
    l_num3       NUMBER;
    l_num_float  BINARY_FLOAT := 2;
BEGIN
    -- Expression involving binary_float and number are converted to binary_float based
    -- on default precedence
    l_num2 := l_num1 * l_num_float;
    sys.dbms_output.put_line('l_num2: ' || l_num2);
    
    -- Stick with NUMBER with explicit conversion
    l_num3 := l_num1 * to_number(l_num_float);
    sys.dbms_output.put_line('l_num3: ' || l_num3);
    
    -- Binary float computations should be checked with pre-defined constants for errors
    l_num_float := l_num_float / 0; --Infinity
    IF l_num_float = binary_float_infinity THEN
        sys.dbms_output.put_line('l_num_float: ' || l_num_float);
    END IF;

END;
/

-- Demo explicit cursor

DECLARE
    c_id     employees.employee_id%TYPE;
    c_name   employees.first_name%TYPE;
    c_email  employees.email%TYPE;
    CURSOR c_customers IS
    SELECT
        employee_id,
        first_name,
        email
    FROM
        employees;

BEGIN
    OPEN c_customers;
    LOOP
        FETCH c_customers INTO
            c_id,
            c_name,
            c_email;
        EXIT WHEN c_customers%notfound;
        dbms_output.put_line(c_id
                             || ' '
                             || c_name
                             || ' '
                             || c_email);

    END LOOP;

    CLOSE c_customers;
END;
/

-- Demo Character Data Type

DECLARE
    l_char_with_space        CHAR(4) := 'ab  ';
    l_char_without_space     CHAR(4) := 'ab';
    l_varchar_without_space  VARCHAR2(4) := 'ab';
BEGIN
    IF l_char_with_space = l_char_without_space THEN
        sys.dbms_output.put_line('l_char_with_space is equal with l_char_without_space');
    ELSE
        sys.dbms_output.put_line('l_char_with_space is not equal with l_char_without_space');
    END IF;

    IF l_char_with_space = l_varchar_without_space THEN
        sys.dbms_output.put_line('l_char_with_space is equal with l_varchar_without_space');
    ELSE
        sys.dbms_output.put_line('l_char_with_space is not equal with l_varchar_without_space');
    END IF;

END;
/

-- Demo Date Time Data Type

SELECT
    current_timestamp,
    systimestamp
FROM
    dual;

ALTER SESSION SET time_zone = 'PST';

ALTER SESSION SET time_zone = 'EST';

SELECT
    current_timestamp,
    systimestamp
FROM
    dual;
--

DECLARE
    l_date              DATE := current_date;
    l_systimestamp      TIMESTAMP WITH TIME ZONE := systimestamp;
    l_currenttimestamp  TIMESTAMP WITH TIME ZONE := current_timestamp;
    l_timestamp         TIMESTAMP := current_timestamp;
BEGIN
    sys.dbms_output.put_line('L_DATE: ' || l_date);
    -- System or db timestamp in pacific zone -8 offset
    sys.dbms_output.put_line('L_SYSTIMESTAMP: ' || l_systimestamp);
    -- Current timestamp shows the session time in easter zone
    sys.dbms_output.put_line('L_CURRENTTIMESTAMP: ' || l_currenttimestamp);
    -- Current timestamp fetched into l_timestamp variable loosing the time zone information
    sys.dbms_output.put_line('L_TIMESTAMP: ' || l_timestamp);
END;
/
-- Demo Interval Data Type

DECLARE
    l_tsmp         TIMESTAMP(2);
    l_tsmp_tz      TIMESTAMP(2) WITH TIME ZONE;
    l_tsmp_new     TIMESTAMP(2);
    l_tsmp_new_tz  TIMESTAMP(2) WITH TIME ZONE;
    l_int          INTERVAL DAY ( 2 ) TO SECOND ( 2 ) := '7 00:00:00.00';
BEGIN
    l_tsmp := to_timestamp('02-NOV-2013 10:00:00.00', 'DD-MM-RRRR HH24:MI:SS.FF');
    l_tsmp_tz := to_timestamp_tz('02-NOV-2013 10:00:00.00 PST PDT', 'DD-MM-RRRR HH24:MI:SS.FF TZR TZD');
    
    -- Add 7 days
    l_tsmp_new := l_tsmp + l_int;
    l_tsmp_new_tz := l_tsmp_tz + l_int;
    
    -- Logging into DBMS OUTPUT
    sys.dbms_output.put_line('New timestamp without time zone: ' || to_char(l_tsmp_new, 'DD-MM-RRRR HH24:MI:SS.FF'));
    sys.dbms_output.put_line('New timestamp with time zone: ' || to_char(l_tsmp_new_tz, 'DD-MM-RRRR HH24:MI:SS.FF TZR TZD'));
END;
/

 -- Demo Composive Data Type: Records

DECLARE
    TYPE emp_rec IS RECORD (
        emp_id          employees.employee_id%TYPE,
        emp_first_name  VARCHAR2(20),
        emp_last_name   employees.last_name%TYPE,
        emp_email       VARCHAR2(25)
    );
    l_emprec emp_rec;
BEGIN
    l_emprec.emp_id := 207;
    l_emprec.emp_first_name := 'Lam';
    l_emprec.emp_last_name := 'Tai';
    l_emprec.emp_email := 'tailam167@gmai.com';
    sys.dbms_output.put_line('ID: ' || l_emprec.emp_id);
    sys.dbms_output.put_line('Name of employee: '
                             || l_emprec.emp_last_name
                             || ' '
                             || l_emprec.emp_first_name);

    sys.dbms_output.put_line('Email of employee: ' || l_emprec.emp_email);
END;
/

-- Demo Composive Data Type: %ROWTYPE

DECLARE
    l_emp_rec employees%rowtype;
BEGIN
    l_emp_rec.employee_id := 207;
    l_emp_rec.first_name := 'Lam';
    l_emp_rec.last_name := 'Tai ';
    sys.dbms_output.put_line('ID: ' || l_emp_rec.employee_id);
    sys.dbms_output.put_line('Name: '
                             || concat(l_emp_rec.last_name, l_emp_rec.first_name));

END;
/

-- Demo Simple Loop

DECLARE
    l_counter  NUMBER := 0;
    l_sum      NUMBER := 0;
BEGIN
    LOOP
        l_sum := l_sum + l_counter;
        l_counter := l_counter + 1;
        sys.dbms_output.put_line('Sum: ' || l_sum);
        IF l_sum > 6 THEN
--            GOTO out_of_loop;
--            EXIT;
            return;
        END IF;
    END LOOP;

    << out_of_loop >> NULL;
END;
/

-- Demo FOR Loop

DECLARE
    l_counter NUMBER;
BEGIN
    FOR l_counter IN 1..3 LOOP
        sys.dbms_output.put_line('l_counter: ' || l_counter);
    END LOOP;
END;
/

-- Demo FOR Loop Counter

DECLARE
    l_lower         NUMBER := 1;
    l_upper         NUMBER := 3;
    l_counter       NUMBER;
    l_step_counter  NUMBER;
BEGIN
    FOR l_counter IN l_lower..( l_upper / l_lower ) LOOP
        sys.dbms_output.put_line('l_counter: ' || l_counter);
        l_step_counter := l_counter * 2;
        sys.dbms_output.put_line('l_step_counter: ' || l_step_counter);
    END LOOP;
END;
/

-- Demo Loop Counter

DECLARE
    l_emp_count  NUMBER;
    l_counter    NUMBER;
BEGIN
    SELECT
        COUNT(*)
    INTO l_emp_count
    FROM
        employees;

    FOR l_counter IN 1..l_emp_count LOOP
        sys.dbms_output.put_line('l_counter: ' || l_counter);
        IF l_counter > 15 THEN
            GOTO out_of_loop;
        END IF;
    END LOOP;

    << out_of_loop >> NULL;
END;
/

-- Demo CONTINUE statement

DECLARE
    l_counter NUMBER;
BEGIN
    FOR l_counter IN 1..5 LOOP
        IF l_counter = 4 THEN
            CONTINUE;
        END IF;
        sys.dbms_output.put_line('l_counter: ' || l_counter);
    END LOOP;
END;
/

-- Demo Loop Nesting and Loop Label and Continue When

DECLARE
    l_outer_loop  NUMBER;
    l_inner_loop  NUMBER;
    l_counter     NUMBER;
BEGIN
    << outer >> FOR l_outer_loop IN 1..3 LOOP
        sys.dbms_output.put_line('Outer Loop: ' || l_outer_loop);
        << inner_loop >> FOR l_inner_loop IN 1..3 LOOP
            CONTINUE outer WHEN l_inner_loop = 3;
            sys.dbms_output.put_line('--> Inner Loop: ' || l_inner_loop);
        END LOOP inner_loop;

        sys.dbms_output.put_line('Outer Loop In The End: ' || l_outer_loop);
    END LOOP outer;

    << myloop >> FOR l_counter IN 1..3 LOOP
        CONTINUE myloop WHEN l_counter = 2;
        sys.dbms_output.put_line('** l_counter: ' || l_counter);
    END LOOP myloop;

END;
/

-- Demo While Loop

DECLARE
    l_check INTEGER := 1;
BEGIN
    WHILE l_check < 5 LOOP
        l_check := sys.dbms_random.value(1, 10);
        sys.dbms_output.put_line('l_check: ' || l_check);
    END LOOP;
END;
/

-- Demo IF-ELSE Statement

DECLARE
    l_sale_amt      NUMBER := 40000;
    l_no_of_orders  NUMBER := 120;
    l_commission    NUMBER;
    l_counter       NUMBER;
BEGIN
    << myloop >> FOR l_counter IN 40000..40500 LOOP
        l_sale_amt := l_counter + 490;
        CONTINUE myloop WHEN l_sale_amt = 40500;
        sys.dbms_output.put_line('Amount: ' || l_sale_amt);
        IF l_sale_amt < 40500 THEN
            l_commission := 5;
            sys.dbms_output.put_line('Commission when amount < 50000: ' || l_commission);
        ELSE
            l_commission := 10;
            sys.dbms_output.put_line('Commission when amount > 50000: ' || l_commission);
            EXIT;
        END IF;

    END LOOP;
END;
/