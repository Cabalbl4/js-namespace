QUnit.test( "creation test", function( assert ) {
  _namespace = "TEST.NAMESPACE"
  assert.ok( TEST, "Create 1 Passed!" );
  assert.ok( TEST.NAMESPACE, "Create 2 Passed!" );
  assert.ok( TEST.NAMESPACE == _namespace, "Verify equal Passed!" );
  _namespace = ".CREATE_NEW"
  assert.ok( TEST.NAMESPACE.CREATE_NEW, "Dot delimited create 3 Passed!" );
  assert.ok( TEST.NAMESPACE.CREATE_NEW == _namespace, "Dot delimited create equal Passed!" );
});

QUnit.test( "do not delete existing test", function( assert ) {
  _namespace = "TEST";
  assert.ok( TEST, "Create 1 Passed!" );
  assert.ok( TEST == _namespace, "Verify equal 1 Passed!" );
  TEST.abc = {};
  _namespace = "TEST.ANOTHER";
  assert.ok( TEST.ANOTHER, "Create 2 Passed!" );
  assert.ok( TEST.abc, "Do not delete Passed!" );	
});

QUnit.test( "reset test", function( assert ) {
  _namespace = "TEST.OTHER";
  _namespace = "TEST.SOME";
  assert.ok( TEST.SOME && TEST.OTHER, "Create Passed!" );
  assert.ok( TEST.SOME == _namespace, "Equal Passed!" );   
  _namespace = TEST.OTHER;
  assert.ok( TEST.OTHER == _namespace, "Equal 2 Passed!" ); 
  _namespace = window;  
  assert.ok( window == _namespace, "Reset Passed!" ); 
});

