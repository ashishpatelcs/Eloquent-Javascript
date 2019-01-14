/*
 * Author: Ashish Patel
 * Date: 11/01/2019
 * 
 * A simple javascript snippet code you can execute in the browser console
 * to accept all the invites you have received. 
 * Simply go to - see all invitations page, where you see the list of all the invitations you have pending.
 * paste this code in browser console, and hit enter. That's it.
 * Watch the magic happen! The invitations will disappear and you'll see the nice green popups
 * indicating invitations have been accepted.
 *
 * Lincese: No license BS. It's as open as it gets. Use it however you may like it xD. just don't break anything.
 *
 */
 
 function acceptInvites() {
  const invites = document.getElementsByClassName('button-secondary-medium');
  for (let i = 0; i < invites.length; i++) {
    invites[i].click();
  }
 }
 
 acceptInvites();
