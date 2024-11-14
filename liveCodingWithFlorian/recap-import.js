// 1. Named import
// Requirement: Named export
// Important: Desctructuring for all the existing exports
import { banana } from "./recap-export";
// Usage: function call()
banana("banana");

// 2. Default import
// Requirement: default export
// Important: We dont need desctructuring
import apple from "./recap-export";
// Usage: function call()
apple("apple");

// 3. Namespace import
// Requirement: Named export
// Important: Desctructuring for all the existing exports AND with a global access MY rename naming convention (fruits)
import * as fruits from "./recap-export";
// Usage: NamingConvetion.namedExport
fruits.banana("banane2");

// 4. Combination
// Requirement: Named export and default export
// Best Usage: React, larger Frameworks
import apple, {banana} from "./recap-export";