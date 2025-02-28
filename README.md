# Task

1. Write the 'Foo' object type with some properties that will be literal string types, and other that will be a number.

declare the const 'foo' variable  object that will be the object with 2 string properties and 1 number property.
Ensure that it's typed with literal string types (properties types are not widened to 'string')


2. Write the UppercaseObject type that will convert the original object'sproperties types to uppercase.

Only properties, which keys are strings, should be uppercased

Apply it to the Foo type and the type of the foovariable that you declared. you shoukd get identical results.

# Hints

use built-in Uppercase<T> type
use conditional type to check the type of the property

## Advanced

Write a function that will do the actual uppercasing
(Implement a function that converts an object's string properties to uppercase)

Use it on some test object and log the results
