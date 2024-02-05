/**ToPrimitive --
 * This function takes an input  argument and convert it into non object .i.e primitive type
 * if it cant convert it throws error
 * It takes one more optional parameter known as prefered type
 * prefered Type : - if we have  2  or more values that can become ans this opational args helps .
 *
 *
 * If prefered type is not given , hint == default this is new variable we initilize
 * else if prefered type is string, hint = "string"
 *
 * else prefered type is number, hint  = "number"
 *
 * if hint is default then we make hint to "number"
 *
 * At last it internally calls OrdinaryToPrimitive
 *
 */

/**
 * in OrdinaryToPrimitive abstract method
 *
 * if hint is String then we call toString()  and valueOf()
 *
 * if hint is "Number" then we call valueOf() and toString()
 * 
 * valueOf() and toString()are not abstrct operation thats  means we can call them
 * 
 * 
 * By default toString() on object return  '[object Object]'
 * By default valueOf on object returns same object
*/
